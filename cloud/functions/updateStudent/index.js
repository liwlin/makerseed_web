const { success, fail } = require("../_template");

exports.main = async (event = {}) => {
  if (!event.studentId) return fail("studentId is required");
  return success({ studentId: event.studentId, updatedAt: new Date().toISOString() });
};
