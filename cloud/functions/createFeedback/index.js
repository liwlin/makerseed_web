const { success, fail } = require("../_template");

exports.main = async (event = {}) => {
  if (!event.studentId || !event.content) return fail("studentId and content are required");
  return success({ _id: `feedback_${Date.now()}`, createdAt: new Date().toISOString(), ...event });
};
