const { memberBenefits, media } = require("../../../utils/app-data");
const { siteConfig } = require("../../../utils/site-config");

Page({
  data: {
    siteConfig,
    media,
    memberBenefits
  },
  goProfile() {
    wx.switchTab({ url: "/pages/student/profile/index" });
  }
});
