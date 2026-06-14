const { campusList } = require("../../utils/app-data");

Page({
  data: {
    cities: ["全部", "江门市"],
    activeCity: "江门市",
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
