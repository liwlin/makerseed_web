# Design Alignment Audit

Last audited: 2026-06-18

This project treats `design/` as the current visual and interaction source of truth.

## Student Mini Program

| Design requirement | Implementation evidence |
|---|---|
| Bottom tabs are `校区 · 报名 · MakerSeed · 课程 · 我的` | `miniprogram/app.json` tabBar uses exactly those labels in that order. |
| `MakerSeed` tab uses the company logo | `miniprogram/app.json` points to `images/tab/makerseed-logo-normal.png` and `images/tab/makerseed-logo-active.png`. |
| Screen 1: 校区 · 首页 | `pages/student/home/` implements campus card, city, seasonal courses and honor strip. |
| Screen 2: 报名 | `pages/student/courses/` implements course sign-up categories, school tabs and fixed CTA. |
| Screen 3: MakerSeed · 种子科创 | `pages/student/membership/` implements member level, points, child binding and benefit grid. |
| Screen 4: 课程管理 | Reserved in the design set; the current visible `课程` tab follows the screenshot correction and opens the course-system screen. |
| Screen 5: 我的 | `pages/student/profile/` implements profile stats, actions and recent booking. |
| Screen 6: 课程详情 | `pages/student/course-detail/` implements course detail and booking entry. |
| Screen 7: 机构介绍 · 实力 | `pages/student/org-strength/` implements the screenshot layout: subnav, dark company header, authority licenses, awards, campus photos and partner schools. |
| Screen 8: 课程体系 | `pages/student/works/` implements the screenshot layout: 5 course directions, age pills and PBL poster strip. |
| Screen 9: 机构介绍 · 师资研发 | `pages/student/org-faculty/` implements the screenshot layout: teacher cards and R&D resource panel. |

## Cleanup Rules

- Do not reintroduce old WOWKIDS terms, old `makerclub` names, old root mini program pages, or old root website files.
- Do not use any earlier non-design tab scheme.
- Run `python3 scripts/validate.py` after every structural or navigation change.
