const { requireRole } = require("../../../services/auth.service");
const { adminDashboard } = require("../../../services/stats.service");

Page({
  data: {
    stats: {}
  },
  onLoad() {
    if (!requireRole("admin")) return;
    adminDashboard().then((stats) => this.setData({ stats }));
  },
  goBookings() {
    wx.navigateTo({ url: "/pages/admin/bookings/index" });
  }
});
