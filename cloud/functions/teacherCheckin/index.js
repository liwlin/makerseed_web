const { success, fail } = require("../_template");

exports.main = async (event = {}) => {
  if (!event.lessonId || !event.studentId) return fail("lessonId and studentId are required");
  return success({ checkedIn: true, checkedAt: new Date().toISOString() });
};
