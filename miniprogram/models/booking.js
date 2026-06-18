module.exports = {
  collection: "bookings",
  fields: {
    _id: "string",
    studentName: "string",
    contactPhone: "string",
    grade: "string",
    course: "string",
    status: "pending | contacted | confirmed | cancelled",
    source: "miniprogram | admin",
    createdAt: "date",
    updatedAt: "date"
  }
};
