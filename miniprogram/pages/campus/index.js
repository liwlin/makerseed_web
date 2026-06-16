const { campusList, heroStories, media } = require("../../utils/app-data");
const { siteConfig } = require("../../utils/site-config");

Page({
  data: {
    siteConfig,
    media,
    heroStories,
    cities: ["全部", "江门市"],
    activeCity: siteConfig.city,
    campusList
  },
  chooseCity(event) {
    const city = event.currentTarget.dataset.city;
    this.setData({ activeCity: city });
  },
  goSignup() {
    wx.switchTab({ url: "/pages/signup/index" });
  },
  copyAddress(event) {
    wx.setClipboardData({
      data: event.currentTarget.dataset.address,
      success: () => wx.showToast({ title: "地址已复制" })
    });
  }
});
