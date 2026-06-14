#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def fail(message):
    print(f"FAIL: {message}")
    return False


def ok(message):
    print(f"OK: {message}")
    return True


def check_file(path):
    target = ROOT / path
    return ok(path) if target.exists() else fail(f"missing {path}")


def check_html_assets():
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    refs = re.findall(r'(?:src|href)="([^"#]+)"', html)
    local_refs = [
        ref for ref in refs
        if not ref.startswith(("http://", "https://", "mailto:", "tel:", "#"))
        and not ref.endswith(".html")
    ]
    passed = True
    for ref in local_refs:
      if not (ROOT / ref).exists():
          passed = fail(f"index.html references missing asset {ref}") and passed
    return ok("index.html local references") if passed else False


def check_miniprogram_pages():
    app_json_path = ROOT / "miniprogram/app.json"
    app_config = json.loads(app_json_path.read_text(encoding="utf-8"))
    passed = True
    for page in app_config["pages"]:
        for suffix in [".js", ".json", ".wxml", ".wxss"]:
            rel = f"miniprogram/{page}{suffix}"
            if not (ROOT / rel).exists():
                passed = fail(f"missing {rel}") and passed
    return ok("miniprogram page files") if passed else False


def check_miniprogram_course_detail():
    required_files = [
        "miniprogram/utils/courses.js",
        "miniprogram/pages/course-detail/index.js",
        "miniprogram/pages/course-detail/index.wxml",
        "miniprogram/pages/course-detail/index.wxss",
    ]
    passed = True
    for path in required_files:
        if not (ROOT / path).exists():
            passed = fail(f"missing {path}") and passed

    courses_js = (ROOT / "miniprogram/utils/courses.js").read_text(encoding="utf-8")
    detail_js = (ROOT / "miniprogram/pages/course-detail/index.js").read_text(encoding="utf-8")
    detail_wxml = (ROOT / "miniprogram/pages/course-detail/index.wxml").read_text(encoding="utf-8")
    if "spring-autumn-steam" not in courses_js or "summer-maker-camp" not in courses_js:
        passed = fail("course data is missing seasonal course ids") and passed
    if "pendingCourse" not in detail_js or "copyLink" not in detail_js:
        passed = fail("course detail page is missing booking/link actions") and passed
    if "course.outcomes" not in detail_wxml or "course.projects" not in detail_wxml:
        passed = fail("course detail page is missing outcomes/projects rendering") and passed

    return ok("miniprogram course detail flow") if passed else False


def main():
    checks = [
        check_file("index.html"),
        check_file("styles.css"),
        check_file("app.js"),
        check_file("assets/brand/logo.png"),
        check_file("assets/brand/长白.png"),
        check_file("miniprogram/app.json"),
        check_file("miniprogram/project.config.json"),
        check_file("miniprogram/sitemap.json"),
        check_file(".github/workflows/pages.yml"),
        check_html_assets(),
        check_miniprogram_pages(),
        check_miniprogram_course_detail(),
    ]
    if all(checks):
        print("All checks passed.")
        return 0
    return 1


if __name__ == "__main__":
    sys.exit(main())
