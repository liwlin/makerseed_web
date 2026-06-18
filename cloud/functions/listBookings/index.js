const { success } = require("../_template");

exports.main = async (event = {}) => {
  return success({
    status: event.status || "all",
    items: []
  });
};
