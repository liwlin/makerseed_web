const { ROLES } = require("../utils/permissions");

module.exports = {
  collection: "users",
  fields: {
    _id: "string",
    openid: "string",
    role: Object.values(ROLES),
    nickname: "string",
    avatarUrl: "string",
    phone: "string",
    createdAt: "date",
    updatedAt: "date"
  }
};
