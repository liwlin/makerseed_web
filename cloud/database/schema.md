# Cloud Database Schema

This project keeps the first release usable with local mock storage, while the target backend is WeChat CloudBase.

Collections:

- `users`: maps `openid` to role and profile fields.
- `students`: child profiles linked to parent users.
- `teachers`: teacher profiles, specialties, campus binding and status.
- `courses`: published course families, seasonal courses and experience lessons.
- `bookings`: trial class and course consultation bookings.
- `orders`: course order and payment state records.
- `memberships`: MakerSeed member level, points and benefits.
- `lessonPackages`: class hour packages and usage counters.
- `feedback`: teacher class notes and parent-facing summaries.
