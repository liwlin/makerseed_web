const { success, fail } = require("../_template");

exports.main = async (event = {}) => {
  if (!event.studentName || !event.contactPhone || !event.course) {
    return fail("studentName, contactPhone and course are required");
  }
  return success({
    _id: `booking_${Date.now()}`,
    status: "pending",
    source: "miniprogram",
    createdAt: new Date().toISOString(),
    ...event
  });
};
