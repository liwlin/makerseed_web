const { success, fail } = require("../_template");

exports.main = async (event = {}) => {
  if (!event.requiredRole) return fail("requiredRole is required");
  return success({
    allowed: event.currentRole === event.requiredRole,
    currentRole: event.currentRole || "parent"
  });
};
