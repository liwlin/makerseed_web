const { memberBenefits } = require("../../utils/app-data");

Page({
  data: {
    memberBenefits
  },
  goProfile() {
    wx.switchTab({ url: "/pages/profile/index" });
  }
});
