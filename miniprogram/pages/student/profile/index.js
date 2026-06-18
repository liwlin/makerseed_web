const { media, profileActions } = require("../../../utils/app-data");
const { siteConfig } = require("../../../utils/site-config");

Page({
  data: {
    siteConfig,
    media,
    profileActions,
    recentBooking: null
  },
  onShow() {
    const bookings = wx.getStorageSync("makerseedBookings") || [];
    this.setData({
      recentBooking: bookings[0] || {
        course: "机器人与自动控制 · 体验课",
        status: "待确认",
        date: "提交于 06-12"
      }
    });
  },
  handleAction(event) {
    const title = event.currentTarget.dataset.title;
    if (title === "会员商城") {
      wx.navigateTo({ url: "/pages/student/membership/index" });
      return;
    }
    if (title === "我的孩子") {
      wx.navigateTo({ url: "/pages/student/booking/index" });
      return;
    }
    wx.showToast({ title: `${title}待接入`, icon: "none" });
  }
});
