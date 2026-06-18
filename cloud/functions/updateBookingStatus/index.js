const { success, fail } = require("../_template");

exports.main = async (event = {}) => {
  if (!event.bookingId || !event.status) return fail("bookingId and status are required");
  return success({
    bookingId: event.bookingId,
    status: event.status,
    updatedAt: new Date().toISOString()
  });
};
