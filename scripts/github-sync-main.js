#!/usr/bin/env node
const { execFileSync } = require("child_process");
const fs = require("fs");

function git(args, options = {}) {
  return execFileSync("git", args, { encoding: "utf8", ...options }).trim();
}

function parseArgs(argv) {
  const options = {
    branch: "main",
    base: "HEAD~1",
    head: "HEAD",
    message: ""
  };

  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    const value = argv[index + 1];
    if (key === "--branch") options.branch = value;
    if (key === "--base") options.base = value;
    if (key === "--head") options.head = value;
    if (key === "--message") options.message = value;
    if (key.startsWith("--")) index += 1;
  }

  return options;
}

function repositoryFromOrigin() {
  const origin = git(["remote", "get-url", "origin"]);
  const httpsMatch = origin.match(/github\.com[:/]([^/]+\/[^/.]+)(?:\.git)?$/);
  if (!httpsMatch) {
    throw new Error(`Cannot derive GitHub repository from origin: ${origin}`);
  }
  return httpsMatch[1];
}

function githubToken() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) return token;

  const credential = execFileSync("git", ["credential", "fill"], {
    input: "protocol=https\nhost=github.com\n\n",
    encoding: "utf8"
  });
  const password = credential
    .split("\n")
    .find((line) => line.startsWith("password="));

  if (!password) {
    throw new Error("GitHub token not found. Set GITHUB_TOKEN/GH_TOKEN or run git credential login first.");
  }
  return password.slice("password=".length);
}

async function githubRequest(repository, method, apiPath, body, token) {
  const response = await fetch(`https://api.github.com/repos/${repository}${apiPath}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "makerseed-github-sync"
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await response.text();
  let payload = {};
  try {
    payload = text ? JSON.parse(text) : {};
  } catch {
    payload = { raw: text };
  }
  if (!response.ok) {
    throw new Error(`${method} ${apiPath} failed ${response.status}: ${text}`);
  }
  return payload;
}

function modeAt(revision, filePath) {
  const output = git(["ls-tree", revision, "--", filePath]);
  return output.split(/\s+/)[0] || "100644";
}

function fileContentAt(revision, filePath, mode) {
  if (mode === "120000") {
    return Buffer.from(git(["show", `${revision}:${filePath}`]));
  }
  return fs.readFileSync(filePath);
}

function changedFiles(base, head) {
  const output = git(["diff", "--name-status", "-M", base, head]);
  if (!output) return [];

  return output.split("\n").flatMap((line) => {
    const [status, firstPath, secondPath] = line.split("\t");
    if (status.startsWith("R")) {
      return [
        { action: "delete", path: firstPath },
        { action: "write", path: secondPath }
      ];
    }
    if (status.startsWith("C")) {
      return [{ action: "write", path: secondPath }];
    }
    if (status === "D") {
      return [{ action: "delete", path: firstPath }];
    }
    return [{ action: "write", path: firstPath }];
  });
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const repository = repositoryFromOrigin();
  const token = githubToken();
  const diff = changedFiles(options.base, options.head);

  if (!diff.length) {
    console.log(`No changes between ${options.base} and ${options.head}.`);
    return;
  }

  const remoteRef = await githubRequest(repository, "GET", `/git/ref/heads/${options.branch}`, null, token);
  const parentSha = remoteRef.object.sha;
  const parentCommit = await githubRequest(repository, "GET", `/git/commits/${parentSha}`, null, token);

  const tree = [];
  for (const item of diff) {
    if (item.action === "delete") {
      tree.push({
        path: item.path,
        mode: modeAt(options.base, item.path),
        type: "blob",
        sha: null
      });
      continue;
    }

    const mode = modeAt(options.head, item.path);
    const blob = await githubRequest(repository, "POST", "/git/blobs", {
      content: fileContentAt(options.head, item.path, mode).toString("base64"),
      encoding: "base64"
    }, token);

    tree.push({
      path: item.path,
      mode,
      type: "blob",
      sha: blob.sha
    });
  }

  const newTree = await githubRequest(repository, "POST", "/git/trees", {
    base_tree: parentCommit.tree.sha,
    tree
  }, token);

  const message = options.message || git(["log", "-1", "--format=%s", options.head]);
  const newCommit = await githubRequest(repository, "POST", "/git/commits", {
    message,
    tree: newTree.sha,
    parents: [parentSha]
  }, token);

  await githubRequest(repository, "PATCH", `/git/refs/heads/${options.branch}`, {
    sha: newCommit.sha,
    force: false
  }, token);

  console.log(`Updated ${repository}:${options.branch}`);
  console.log(`${parentSha} -> ${newCommit.sha}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
