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
| Screen 4: 课程管理 | `pages/student/works/` implements current/past courses and progress. |
| Screen 5: 我的 | `pages/student/profile/` implements profile stats, actions and recent booking. |
| Screen 6: 课程详情 | `pages/student/course-detail/` implements course detail and booking entry. |
| Screen 7: 机构介绍 · 实力 | `pages/student/org-strength/` implements qualifications, honors and school activity proof. |
| Screen 8: 课程体系 | Course family content appears in the sign-up and course tabs; it should remain visually aligned with the design course-system section. |
| Screen 9: 机构介绍 · 师资研发 | `pages/student/org-faculty/` implements faculty and R&D content. |

## Cleanup Rules

- Do not reintroduce old WOWKIDS terms, old `makerclub` names, old root mini program pages, or old root website files.
- Do not use any earlier non-design tab scheme.
- Run `python3 scripts/validate.py` after every structural or navigation change.
