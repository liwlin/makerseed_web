const { memberBenefits } = require("../../utils/app-data");
const { siteConfig } = require("../../utils/site-config");

Page({
  data: {
    siteConfig,
    memberBenefits
  },
  goProfile() {
    wx.switchTab({ url: "/pages/profile/index" });
  }
});
