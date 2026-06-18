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


def read_json(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


def check_file(path):
    target = ROOT / path
    return ok(path) if target.exists() else fail(f"missing {path}")


def check_website():
    passed = True
    for path in [
        "index.html",
        "styles.css",
        "app.js",
        "config.js",
        "config.example.js",
        "support.js",
    ]:
        if (ROOT / path).exists():
            passed = fail(f"legacy root website file should not exist: {path}") and passed

    for path in [
        "website/index.html",
        "website/styles.css",
        "website/app.js",
        "website/config.js",
        "website/assets/brand/logo.png",
        "website/assets/brand/logo-horizontal.png",
    ]:
        passed = check_file(path) and passed

    html = (ROOT / "website/index.html").read_text(encoding="utf-8")
    refs = re.findall(r'(?:src|href)="([^"#]+)"', html)
    local_refs = [
        ref for ref in refs
        if not ref.startswith(("http://", "https://", "mailto:", "tel:", "#"))
        and not ref.endswith(".html")
    ]
    for ref in local_refs:
        if not (ROOT / "website" / ref).exists():
            passed = fail(f"website/index.html references missing asset {ref}") and passed

    workflow = (ROOT / ".github/workflows/pages.yml").read_text(encoding="utf-8")
    if "path: website" not in workflow:
        passed = fail("GitHub Pages workflow must deploy only website/") and passed
    return ok("website package") if passed else False


def check_content_source():
    passed = True
    for path in [
        "content/brand.json",
        "content/campus.json",
        "content/courses.json",
        "content/teachers.json",
        "content/honors.json",
        "content/articles.json",
    ]:
        passed = check_file(path) and passed
        if (ROOT / path).exists():
            read_json(path)
    return ok("shared content source") if passed else False


def check_miniprogram_pages():
    app_config = read_json("miniprogram/app.json")
    passed = True
    for page in app_config["pages"]:
        for suffix in [".js", ".json", ".wxml", ".wxss"]:
            rel = f"miniprogram/{page}{suffix}"
            if not (ROOT / rel).exists():
                passed = fail(f"missing {rel}") and passed
    return ok("miniprogram page files") if passed else False


def check_three_end_structure():
    app_config = read_json("miniprogram/app.json")
    pages = app_config["pages"]
    expected = [
        "pages/role-select/index",
        "pages/student/home/index",
        "pages/student/courses/index",
        "pages/student/membership/index",
        "pages/student/works/index",
        "pages/student/profile/index",
        "pages/student/course-detail/index",
        "pages/student/org-strength/index",
        "pages/student/org-faculty/index",
        "pages/student/booking/index",
        "pages/teacher/home/index",
        "pages/teacher/schedule/index",
        "pages/teacher/students/index",
        "pages/teacher/checkin/index",
        "pages/teacher/feedback/index",
        "pages/teacher/profile/index",
        "pages/admin/dashboard/index",
        "pages/admin/bookings/index",
        "pages/admin/students/index",
        "pages/admin/courses/index",
        "pages/admin/teachers/index",
        "pages/admin/orders/index",
        "pages/admin/memberships/index",
        "pages/admin/profile/index",
    ]
    passed = True
    if pages != expected:
        passed = fail(f"miniprogram pages differ from business-plan structure: {pages}") and passed

    old_roots = [
        "booking",
        "campus",
        "course-detail",
        "course-manage",
        "makerclub",
        "org-faculty",
        "org-strength",
        "profile",
        "signup",
        "home",
        "courses",
    ]
    for name in old_roots:
        old_dir = ROOT / "miniprogram/pages" / name
        if old_dir.exists() and any(old_dir.glob("*")):
            passed = fail(f"old miniprogram root page still exists: miniprogram/pages/{name}") and passed

    for path in (ROOT / "miniprogram/pages").glob("* 2"):
        passed = fail(f"duplicate copied page directory remains: {path.relative_to(ROOT)}") and passed

    for path in [
        "miniprogram/utils/courses.js",
        "miniprogram/utils/articles.js",
        "miniprogram/images/tab/club-normal.png",
        "miniprogram/images/tab/club-active.png",
    ]:
        if (ROOT / path).exists():
            passed = fail(f"old mini-program artifact still exists: {path}") and passed

    return ok("three-end miniprogram reset") if passed else False


def check_miniprogram_tabbar():
    app_config = read_json("miniprogram/app.json")
    handoff = (ROOT / "design/DESIGN_HANDOFF.md").read_text(encoding="utf-8")
    if "校区 · 报名 · MakerSeed · 课程 · 我的" not in handoff:
        return fail("design handoff must declare the student tabBar source of truth")

    expected = [
        ("pages/student/home/index", "校区"),
        ("pages/student/courses/index", "报名"),
        ("pages/student/membership/index", "MakerSeed"),
        ("pages/student/works/index", "课程"),
        ("pages/student/profile/index", "我的"),
    ]
    actual = [(item["pagePath"], item["text"]) for item in app_config["tabBar"]["list"]]
    passed = True
    if actual != expected:
        passed = fail(f"tabBar differs from expected student layout: {actual}") and passed

    maker_tab = app_config["tabBar"]["list"][2]
    if maker_tab["iconPath"] != "images/tab/makerseed-logo-normal.png":
        passed = fail("MakerSeed tab normal icon must use MakerSeed logo") and passed
    if maker_tab["selectedIconPath"] != "images/tab/makerseed-logo-active.png":
        passed = fail("MakerSeed tab selected icon must use MakerSeed logo") and passed

    for item in app_config["tabBar"]["list"]:
        for key in ["iconPath", "selectedIconPath"]:
            if not (ROOT / "miniprogram" / item[key]).exists():
                passed = fail(f"missing tab icon {item[key]}") and passed
    return ok("student tabBar") if passed else False


def check_navigation_targets():
    app_config = read_json("miniprogram/app.json")
    declared_pages = {"/" + page for page in app_config["pages"]}
    tab_pages = {"/" + item["pagePath"] for item in app_config["tabBar"]["list"]}
    passed = True
    for path in (ROOT / "miniprogram/pages").glob("**/*.js"):
        text = path.read_text(encoding="utf-8")
        for target in re.findall(r'wx\.(?:navigateTo|redirectTo)\(\{\s*url:\s*"([^"]+)"', text):
            clean = target.split("?")[0]
            if clean not in declared_pages:
                passed = fail(f"{path.relative_to(ROOT)} navigates to undeclared page {target}") and passed
        for target in re.findall(r'wx\.switchTab\(\{\s*url:\s*"([^"]+)"', text):
            clean = target.split("?")[0]
            if clean not in tab_pages:
                passed = fail(f"{path.relative_to(ROOT)} switchTab targets non-tab page {target}") and passed
    return ok("miniprogram navigation targets") if passed else False


def check_no_stale_tokens():
    stale_tokens = [
        "WOWKIDS",
        "wowkids",
        "YourCampus",
        "Makerclub",
        "makerclub",
        "articleMaterials",
        "findCourse",
        "group.matrix",
        "#4b1f68",
        "#8f3dd6",
    ]
    passed = True
    for path in (ROOT / "miniprogram").glob("**/*"):
        if path.is_file() and path.suffix in {".js", ".json", ".wxml", ".wxss"}:
            text = path.read_text(encoding="utf-8")
            for token in stale_tokens:
                if token in text:
                    passed = fail(f"old mini-program scheme token remains in {path.relative_to(ROOT)}: {token}") and passed
    return ok("old design tokens removed") if passed else False


def check_design_alignment():
    design = (ROOT / "design/种子创客工坊 小程序-学生端.dc.html").read_text(encoding="utf-8")
    app_data = (ROOT / "miniprogram/utils/app-data.js").read_text(encoding="utf-8")
    app_wxss = (ROOT / "miniprogram/app.wxss").read_text(encoding="utf-8")
    makerseed_page = (ROOT / "miniprogram/pages/student/membership/index.wxml").read_text(encoding="utf-8")
    makerseed_config = read_json("miniprogram/pages/student/membership/index.json")
    works_page = (ROOT / "miniprogram/pages/student/works/index.wxml").read_text(encoding="utf-8")
    passed = True
    if "① 校区" not in design or "⑨ 机构介绍" not in design:
        passed = fail("student-side design source is missing expected 9-screen markers") and passed
    for token in ["#0079c8", "#ff5a36", "#ffb020", "#39B0E3", "#F4B721", "#3AAA4A", "#DE3B2F", "#23459E"]:
        if token not in app_data and token not in app_wxss:
            passed = fail(f"design color token missing from miniprogram implementation: {token}") and passed
    for token in ["campus", "featuredSeason", "courseFamilies", "memberBenefits", "currentCourses", "profileActions", "honors", "faculty"]:
        if token not in app_data:
            passed = fail(f"design data model missing {token}") and passed
    if makerseed_config.get("navigationBarTitleText") != "机构介绍":
        passed = fail("MakerSeed tab must open the design institution-intro page, not the old member page") and passed
    for token in ["机构介绍", "实力", "师资研发", "江门种子科创培训有限公司", "权威授牌", "研发科普资源能力及成果"]:
        if token not in makerseed_page:
            passed = fail(f"MakerSeed tab page missing design content: {token}") and passed
    for stale in ["会员权益", "绑定我的孩子", "memberBenefits"]:
        if stale in makerseed_page:
            passed = fail(f"old member-center content remains in MakerSeed tab page: {stale}") and passed
    for stale_icon in [">机<", ">芯<", ">航<"]:
        if stale_icon in works_page or stale_icon in app_data:
            passed = fail(f"course system still contains placeholder icon {stale_icon}") and passed
    return ok("design-source alignment") if passed else False


def check_services_models_components():
    passed = True
    for path in [
        "miniprogram/services/auth.service.js",
        "miniprogram/services/booking.service.js",
        "miniprogram/services/course.service.js",
        "miniprogram/services/student.service.js",
        "miniprogram/services/teacher.service.js",
        "miniprogram/services/order.service.js",
        "miniprogram/services/member.service.js",
        "miniprogram/services/stats.service.js",
        "miniprogram/utils/permissions.js",
    ]:
        passed = check_file(path) and passed

    for model in ["user", "student", "teacher", "course", "booking", "order", "membership", "lesson-package"]:
        passed = check_file(f"miniprogram/models/{model}.js") and passed

    for component in ["status-tag", "empty-state", "role-switcher", "course-card", "booking-card", "student-card"]:
        for suffix in [".js", ".json", ".wxml", ".wxss"]:
            passed = check_file(f"miniprogram/components/{component}/index{suffix}") and passed
    return ok("services models components") if passed else False


def check_cloud_docs():
    passed = True
    for path in [
        "cloud/database/schema.md",
        "cloud/database/indexes.md",
        "cloud/database/security-rules.md",
        "cloud/database/seed.json",
        "docs/architecture.md",
        "docs/data-model.md",
        "docs/roles.md",
        "docs/deployment.md",
        "docs/roadmap.md",
        "docs/implementation-status.md",
        "docs/design-alignment-audit.md",
    ]:
        passed = check_file(path) and passed

    functions = [
        "_template",
        "login",
        "checkRole",
        "createBooking",
        "listBookings",
        "updateBookingStatus",
        "createStudent",
        "updateStudent",
        "teacherCheckin",
        "createFeedback",
        "createOrder",
        "updateOrderStatus",
        "getMemberInfo",
        "updateMembership",
        "adminDashboard",
    ]
    for name in functions:
        suffix = "_template.js" if name == "_template" else f"{name}/index.js"
        passed = check_file(f"cloud/functions/{suffix}") and passed
    read_json("cloud/database/seed.json")
    return ok("cloud and docs skeleton") if passed else False


def main():
    checks = [
        check_website(),
        check_content_source(),
        check_file("miniprogram/app.json"),
        check_file("miniprogram/project.config.json"),
        check_file("miniprogram/sitemap.json"),
        check_file("miniprogram/DEPLOYMENT.md"),
        check_miniprogram_pages(),
        check_three_end_structure(),
        check_miniprogram_tabbar(),
        check_navigation_targets(),
        check_no_stale_tokens(),
        check_design_alignment(),
        check_services_models_components(),
        check_cloud_docs(),
    ]
    if all(checks):
        print("All checks passed.")
        return 0
    return 1


if __name__ == "__main__":
    sys.exit(main())
