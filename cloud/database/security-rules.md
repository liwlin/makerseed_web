# Security Rules

Principles for CloudBase rules:

- Parent/student users can read their own profile, children, bookings, orders and membership records.
- Teachers can read assigned schedules, assigned student summaries and write check-in or feedback records.
- Admin users can read and write operational collections: bookings, students, courses, teachers, orders and memberships.
- Public reads are limited to published course, campus, teacher and article content.
- All write operations should also validate role in cloud functions, not only in client-side code.
