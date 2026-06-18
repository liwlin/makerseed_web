const { requireRole } = require("../../../services/auth.service");

Page({
  onLoad() {
    requireRole("teacher");
  },
  submit() {
    wx.showToast({ title: "反馈已保存", icon: "none" });
  }
});
