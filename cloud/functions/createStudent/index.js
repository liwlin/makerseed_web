const { success, fail } = require("../_template");

exports.main = async (event = {}) => {
  if (!event.name || !event.parentPhone) return fail("name and parentPhone are required");
  return success({ _id: `student_${Date.now()}`, ...event });
};
