const { success, fail } = require("../_template");

exports.main = async (event = {}) => {
  if (!event.userId || !event.courseId || !event.amount) return fail("userId, courseId and amount are required");
  return success({ _id: `order_${Date.now()}`, status: "unpaid", createdAt: new Date().toISOString(), ...event });
};
