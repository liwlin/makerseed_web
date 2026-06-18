# Architecture

The repository is split into product layers:

- `website/`: official public site, deployed by GitHub Pages.
- `miniprogram/`: WeChat Mini Program with student/parent, teacher and admin entry points.
- `cloud/`: CloudBase database notes and cloud function skeletons.
- `content/`: shared brand, campus, course, teacher, honor and article content.
- `assets/`: source/high-resolution design assets. It is kept as an internal asset library and is not the website deployment root.
- `design/`: design source files from the Claude Code handoff.
- `docs/`: implementation, deployment, data and roadmap documentation.

The mini program currently uses mock services backed by local storage so it can be previewed immediately in WeChat Developer Tools. The service files under `miniprogram/services/` are the boundary for replacing mock storage with CloudBase calls.

Root-level website files are intentionally absent. Production website files live under `website/`, and the GitHub Pages workflow publishes only that directory.
