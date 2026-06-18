# MakerSeed Project Context

This project should evolve from a marketing website plus display-oriented mini program into a lightweight business system.

Authoritative planning source:

- `docs/business-plan.md`
- `design/DESIGN_HANDOFF.md`

Current implementation checkpoint:

- The website currently follows the visual handoff in `design/`.
- The mini program currently implements the student/parent-facing MVP shell.
- Future development should migrate toward a structured monorepo:
  - `website/` for the official website
  - `miniprogram/` for the WeChat mini program
  - `cloud/` for WeChat Cloud Functions and database rules
  - `content/` for shared brand/course/campus data
  - `docs/` for architecture, roles, data models, and deployment notes
  - `design/` for design source files

Important product direction:

- Website: trust-building, brand presentation, course introduction, environment, results, and lead capture.
- Mini program: real operations system with student/parent, teacher, and admin roles.
- Backend: data integrity, role permissions, booking/order/lesson/membership workflows, and audit logs.

Near-term roadmap:

1. Keep the current website and mini program running.
2. Move website production files into `website/` and deploy only that directory.
3. Add role-based mini program structure under `pages/student/`, `pages/teacher/`, and `pages/admin/`.
4. Add shared `content/` data sources.
5. Add role and auth utilities.
6. Move booking data from local storage fallback toward WeChat Cloud Database.
7. Build admin booking MVP and teacher schedule/check-in MVP.

Implementation guardrails:

- Do not break the current runnable website or mini program while restructuring.
- Do not use local storage for official business records beyond demo/fallback.
- Do not let frontend code directly mutate sensitive data such as payment status, lesson balances, membership level, or roles.
- Do not commit secrets such as AppSecret, cloud keys, payment keys, or webhook tokens.
- Treat design HTML as a visual source of truth, not the long-term production architecture.
