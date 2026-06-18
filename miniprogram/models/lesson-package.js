module.exports = {
  collection: "lessonPackages",
  fields: {
    _id: "string",
    studentId: "string",
    courseId: "string",
    totalLessons: "number",
    usedLessons: "number",
    expiresAt: "date"
  }
};
