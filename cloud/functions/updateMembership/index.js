const { success, fail } = require("../_template");

exports.main = async (event = {}) => {
  if (!event.userId) return fail("userId is required");
  return success({ userId: event.userId, updatedAt: new Date().toISOString(), ...event });
};
