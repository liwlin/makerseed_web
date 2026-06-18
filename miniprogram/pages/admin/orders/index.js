const { requireRole } = require("../../../services/auth.service");

Page({
  onLoad() {
    requireRole("admin");
  }
});
