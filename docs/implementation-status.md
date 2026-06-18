# Implementation Status

Last audited: 2026-06-18

## Repository

- GitHub should use `main` as the single clean delivery branch.
- Production website files live in `website/`.
- Root-level legacy website files have been removed.
- `assets/` remains as the source/high-resolution asset library for design and future production exports.

## Website

- `website/index.html` implements the current design handoff.
- GitHub Pages publishes only `website/`.
- The current appointment form is suitable for demo and content validation; it stores data locally in the browser.
- `website/app.js` and `website/config.js` retain earlier remote form and CSV-export helpers, but they are not wired into the current design-first page entry.

## Mini Program

- AppID: `wx967632af57c4d7ea`
- Current development version target: `0.0.2`
- The old mini program scheme was removed and rebuilt around the design handoff.
- Student/parent, teacher and admin page trees are present under `pages/student/`, `pages/teacher/` and `pages/admin/`.
- Student tabBar follows the design handoff exactly: `校区 · 报名 · MakerSeed · 课程 · 我的`.
- The `MakerSeed` tab uses the MakerSeed company logo icon.
- The `MakerSeed` tab is the institution-intro surface with `实力 / 师资研发` switching, matching the design screenshots rather than the earlier member-center prototype.
- Mock services under `miniprogram/services/` keep the app previewable while CloudBase is introduced.

## Remaining Production Work

- Bind WeChat login to real user roles and permissions.
- Replace local mock storage with CloudBase collections and cloud functions.
- Complete payment, invoice, membership, class-hour and operational reporting flows.
- Re-run mobile preview and upload after each functional phase.
