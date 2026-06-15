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


def check_miniprogram_tabbar():
    app_config = json.loads((ROOT / "miniprogram/app.json").read_text(encoding="utf-8"))
    expected = [
        "pages/campus/index",
        "pages/signup/index",
        "pages/makerclub/index",
        "pages/course-manage/index",
        "pages/profile/index",
    ]
    actual = [item["pagePath"] for item in app_config["tabBar"]["list"]]
    passed = True
    if actual != expected:
        passed = fail(f"tabBar pages differ from expected 5-tab layout: {actual}") and passed
    for item in app_config["tabBar"]["list"]:
        for key in ["iconPath", "selectedIconPath"]:
            path = ROOT / "miniprogram" / item[key]
            if not path.exists():
                passed = fail(f"missing tab icon {item[key]}") and passed
    return ok("miniprogram 5-tab layout") if passed else False


def check_miniprogram_navigation():
    app_config = json.loads((ROOT / "miniprogram/app.json").read_text(encoding="utf-8"))
    tab_pages = {"/" + item["pagePath"] for item in app_config["tabBar"]["list"]}
    passed = True
    for path in (ROOT / "miniprogram/pages").glob("**/*.js"):
        text = path.read_text(encoding="utf-8")
        for target in re.findall(r'wx\.switchTab\(\{\s*url:\s*"([^"]+)"', text):
            clean = target.split("?")[0]
            if clean not in tab_pages:
                passed = fail(f"{path.relative_to(ROOT)} switchTab targets non-tab page {target}") and passed
    return ok("miniprogram navigation targets") if passed else False


def check_miniprogram_data_flows():
    passed = True
    site_config = (ROOT / "miniprogram/utils/site-config.js").read_text(encoding="utf-8")
    articles_js = (ROOT / "miniprogram/utils/articles.js").read_text(encoding="utf-8")
    deployment_doc = (ROOT / "miniprogram/DEPLOYMENT.md").read_text(encoding="utf-8")
    manage_js = (ROOT / "miniprogram/pages/course-manage/index.js").read_text(encoding="utf-8")
    manage_wxml = (ROOT / "miniprogram/pages/course-manage/index.wxml").read_text(encoding="utf-8")
    booking_js = (ROOT / "miniprogram/pages/booking/index.js").read_text(encoding="utf-8")
    booking_wxml = (ROOT / "miniprogram/pages/booking/index.wxml").read_text(encoding="utf-8")
    profile_js = (ROOT / "miniprogram/pages/profile/index.js").read_text(encoding="utf-8")
    signup_js = (ROOT / "miniprogram/pages/signup/index.js").read_text(encoding="utf-8")
    if "publicAccount" not in site_config or "campusName" not in site_config:
        passed = fail("site config is missing public account or campus fields") and passed
    if "positioning" not in site_config:
        passed = fail("site config is missing official positioning") and passed
    if "autumn-2025" not in articles_js or "science-workshop-2025" not in articles_js:
        passed = fail("article materials are missing imported WeChat course sources") and passed
    if "touristappid" not in deployment_doc or "webapi_getwxaasyncsecinfo" not in deployment_doc:
        passed = fail("deployment notes are missing appid/troubleshooting guidance") and passed
    if 'wx.getStorageSync("bookings")' not in manage_js:
        passed = fail("course management does not read booking data") and passed
    if "visibleCourses.length" not in manage_wxml or "managed-card" not in manage_wxml:
        passed = fail("course management is missing non-empty course rendering") and passed
    if "selectedGrade" not in booking_js or "gradeOptions" not in booking_wxml:
        passed = fail("booking flow is missing student grade capture") and passed
    if "interestOptions" not in booking_js:
        passed = fail("booking flow does not dedupe course interest options") and passed
    if "item.status" not in manage_wxml or "item.grade" not in manage_wxml:
        passed = fail("course management is missing booking status or grade display") and passed
    if "handleAction" not in profile_js:
        passed = fail("profile action grid is missing tap handlers") and passed
    if "articleMaterials" not in signup_js:
        passed = fail("signup page is missing official article materials") and passed
    return ok("miniprogram data flows") if passed else False


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
    courses_page_js = (ROOT / "miniprogram/pages/courses/index.js").read_text(encoding="utf-8")
    detail_js = (ROOT / "miniprogram/pages/course-detail/index.js").read_text(encoding="utf-8")
    detail_wxml = (ROOT / "miniprogram/pages/course-detail/index.wxml").read_text(encoding="utf-8")
    if "spring-autumn-steam" not in courses_js or "summer-maker-camp" not in courses_js:
        passed = fail("course data is missing seasonal course ids") and passed
    if "winter-maker-camp" not in courses_js or "science-workshop" not in courses_js:
        passed = fail("course data is missing imported winter camp or workshop ids") and passed
    if "pendingCourse" not in detail_js or "copyLink" not in detail_js:
        passed = fail("course detail page is missing booking/link actions") and passed
    if "course.outcomes" not in detail_wxml or "course.projects" not in detail_wxml:
        passed = fail("course detail page is missing outcomes/projects rendering") and passed
    if "group.matrix" not in detail_wxml or "activeCourse" not in detail_js:
        passed = fail("course detail page is missing grouped course matrix interactions") and passed
    if "packageItems" not in courses_js or "packageItems" not in detail_wxml:
        passed = fail("course detail page is missing package/material rendering") and passed
    if "course.source" not in detail_wxml:
        passed = fail("course detail page is missing official article source rendering") and passed
    if '"event"' not in courses_page_js:
        passed = fail("course list page is missing event category") and passed

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
        check_file("miniprogram/DEPLOYMENT.md"),
        check_file("miniprogram/utils/articles.js"),
        check_file(".github/workflows/pages.yml"),
        check_html_assets(),
        check_miniprogram_pages(),
        check_miniprogram_tabbar(),
        check_miniprogram_navigation(),
        check_miniprogram_data_flows(),
        check_miniprogram_course_detail(),
    ]
    if all(checks):
        print("All checks passed.")
        return 0
    return 1


if __name__ == "__main__":
    sys.exit(main())
