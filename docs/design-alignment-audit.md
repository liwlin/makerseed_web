# Design Alignment Audit

Last audited: 2026-06-18

This project treats `design/` as the current visual and interaction source of truth.

## Student-Side Correction

`design/种子创客工坊 小程序-学生端.dc.html` still contains an early Screen 3 member-center concept. The current implementation follows the later user-confirmed mobile screenshots: `MakerSeed` is the institution-intro tab, not the member-center tab. This correction is recorded in `design/DESIGN_HANDOFF.md` and enforced by `scripts/validate.py`.

## Student Mini Program

| Design requirement | Implementation evidence |
|---|---|
| Bottom tabs are `校区 · 报名 · MakerSeed · 课程 · 我的` | `miniprogram/app.json` tabBar uses exactly those labels in that order. |
| `MakerSeed` tab uses the company logo | `miniprogram/app.json` points to `images/tab/makerseed-logo-normal.png` and `images/tab/makerseed-logo-active.png`. |
| Screen 1: 校区 · 首页 | `pages/student/home/` implements campus card, city, seasonal courses and honor strip. |
| Screen 2: 报名 | `pages/student/courses/` implements course sign-up categories, school tabs and fixed CTA. |
| Screen 3 / 7 / 9: MakerSeed · 机构介绍 | `pages/student/membership/` is the only MakerSeed tab page and implements the screenshot-corrected `机构介绍` surface with in-page `实力 / 师资研发` switching. Old member-center content is not used in this tab. |
| Screen 4: 课程管理 | Reserved in the design set; the current visible `课程` tab follows the screenshot correction and opens the course-system screen. |
| Screen 5: 我的 | `pages/student/profile/` implements profile stats, actions and recent booking. |
| Screen 6: 课程详情 | `pages/student/course-detail/` implements course detail and booking entry. |
| Screen 7: 机构介绍 · 实力 | Implemented inside `pages/student/membership/` so the bottom tab remains `MakerSeed` selected. |
| Screen 8: 课程体系 | `pages/student/works/` implements the screenshot layout: 5 course directions, age pills and PBL poster strip. |
| Screen 9: 机构介绍 · 师资研发 | Implemented inside `pages/student/membership/` so the bottom tab remains `MakerSeed` selected. |

## Teacher And Admin Mini Program

`DESIGN_HANDOFF.md` marks teacher and admin ends as pending design. Current teacher/admin pages are MVP business skeletons based on `docs/business-plan.md`, not high-fidelity design implementations. They still follow the shared visual system:

- Neutral gray page background, white cards and brand blue internal actions.
- Orange `primary-button` is reserved for student-facing booking/sign-up conversion.
- Teacher/admin pages must not use orange `primary-button` for internal actions such as check-in, save feedback or process bookings.

## Cleanup Rules

- Do not reintroduce old WOWKIDS terms, old `makerclub` names, old root mini program pages, or old root website files.
- Do not use any earlier non-design tab scheme.
- Run `python3 scripts/validate.py` after every structural or navigation change.
