const { faculty, media } = require("../../../utils/app-data");

Page({
  data: {
    faculty,
    media
  },
  goStrength() {
    wx.navigateTo({ url: "/pages/student/org-strength/index" });
  }
});
