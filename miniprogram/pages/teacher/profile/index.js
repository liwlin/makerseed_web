const { getCurrentRole } = require("../../../services/auth.service");

Page({
  data: { role: "" },
  onShow() {
    this.setData({ role: getCurrentRole() });
  },
  switchRole() {
    wx.navigateTo({ url: "/pages/role-select/index" });
  }
});
