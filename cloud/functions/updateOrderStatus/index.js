const { success, fail } = require("../_template");

exports.main = async (event = {}) => {
  if (!event.orderId || !event.status) return fail("orderId and status are required");
  return success({ orderId: event.orderId, status: event.status, updatedAt: new Date().toISOString() });
};
