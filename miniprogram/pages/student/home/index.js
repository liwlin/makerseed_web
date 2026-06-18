const { campus, featuredSeason, media, seasons } = require("../../../utils/app-data");
const { siteConfig } = require("../../../utils/site-config");

Page({
  data: {
    siteConfig,
    media,
    campus,
    seasons,
    activeSeason: "春季班",
    featuredSeason
  },
  chooseSeason(event) {
    this.setData({ activeSeason: event.currentTarget.dataset.season });
  },
  copyAddress() {
    wx.setClipboardData({
      data: this.data.campus.address,
      success: () => wx.showToast({ title: "地址已复制" })
    });
  },
  goSignup() {
    wx.switchTab({ url: "/pages/student/courses/index" });
  },
  goStrength() {
    wx.setStorageSync("makerseedOrgTab", "strength");
    wx.switchTab({ url: "/pages/student/membership/index" });
  }
});
