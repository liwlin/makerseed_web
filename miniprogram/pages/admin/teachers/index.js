const { requireRole } = require("../../../services/auth.service");
const { faculty } = require("../../../utils/app-data");

Page({
  data: { teachers: faculty },
  onLoad() {
    requireRole("admin");
  }
});
