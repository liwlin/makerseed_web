const { requireRole } = require("../../../services/auth.service");

Page({
  data: {
    checked: false
  },
  onLoad() {
    requireRole("teacher");
  },
  checkin() {
    this.setData({ checked: true });
    wx.showToast({ title: "已签到" });
  }
});
