const { success } = require("../_template");

exports.main = async (event = {}, context = {}) => {
  return success({
    openid: context.OPENID || event.openid || "mock_openid",
    role: event.role || "parent"
  });
};
