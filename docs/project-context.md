# MakerSeed Project Context

This project should evolve from a marketing website plus display-oriented mini program into a lightweight business system.

Authoritative planning source:

- `docs/business-plan.md`
- `design/DESIGN_HANDOFF.md`

Current implementation checkpoint:

- The website currently follows the visual handoff in `design/`.
- The website production entry is `website/index.html`; root-level website files are intentionally absent.
- The mini program currently implements a three-end MVP shell for student/parent, teacher and admin roles.
- The repository now uses this structured layout:
  - `website/` for the official website
  - `miniprogram/` for the WeChat mini program
  - `cloud/` for WeChat Cloud Functions and database rules
  - `content/` for shared brand/course/campus data
  - `assets/` for source/high-resolution design assets
  - `docs/` for architecture, roles, data models, and deployment notes
  - `design/` for design source files

Important product direction:

- Website: trust-building, brand presentation, course introduction, environment, results, and lead capture.
- Mini program: real operations system with student/parent, teacher, and admin roles.
- Backend: data integrity, role permissions, booking/order/lesson/membership workflows, and audit logs.

Near-term roadmap:

1. Keep the current website and mini program running.
2. Continue validating design fidelity against `design/`.
3. Move booking data from local storage fallback toward WeChat Cloud Database.
4. Bind roles to WeChat login and server-side permissions.
5. Replace mock admin/teacher data with real operational data.
6. Add payment, membership and class-hour workflows after CloudBase persistence is stable.

Implementation guardrails:

- Do not break the current runnable website or mini program while restructuring.
- Do not use local storage for official business records beyond demo/fallback.
- Do not let frontend code directly mutate sensitive data such as payment status, lesson balances, membership level, or roles.
- Do not commit secrets such as AppSecret, cloud keys, payment keys, or webhook tokens.
- Treat design HTML as a visual source of truth, not the long-term production architecture.
