# Data Model

Core entities:

- User: login identity, openid, role and contact fields.
- Student: child profile attached to a parent user.
- Teacher: teacher profile, specialty and campus assignment.
- Course: public course family, seasonal course or experience lesson.
- Booking: trial class or consultation request.
- Order: purchase and payment status.
- Membership: MakerSeed member benefits and points.
- Lesson package: class-hour balance and usage.

Client model stubs live under `miniprogram/models/`; CloudBase collection guidance lives under `cloud/database/`.
