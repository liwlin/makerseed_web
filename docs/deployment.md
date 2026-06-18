# Deployment

Website:

- GitHub Pages deploys only the `website/` folder.
- The repository root is not a website entry point.
- Keep source design assets in `assets/` / `design/`; only the curated `website/` artifact is published.

Mini Program:

- AppID: `wx967632af57c4d7ea`
- Preview locally with WeChat Developer Tools CLI.
- Upload development versions through the CLI after validation.
- Current development upload target: `0.0.2`, rebuilt around the design handoff and the three-end business plan.

Cloud:

- Create the CloudBase environment in WeChat Developer Tools.
- Apply the collections and indexes documented under `cloud/database/`.
- Replace mock service methods with `wx.cloud.callFunction` calls function by function.

Validation before deployment:

```bash
python3 scripts/validate.py
```

GitHub sync:

- Default workflow is to commit locally, then sync the completed commit to `main` with the GitHub API script.
- This avoids the repository's intermittent Git smart HTTP push stalls.
- The script reads `GITHUB_TOKEN` / `GH_TOKEN`, or falls back to the existing `git credential` helper. It never prints the token.

```bash
node scripts/github-sync-main.js --branch main --base HEAD~1 --head HEAD
```

Use normal `git push` only when it is already known to be healthy for the current session.
