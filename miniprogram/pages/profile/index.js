const { profileActions } = require("../../utils/app-data");
const { siteConfig } = require("../../utils/site-config");

Page({
  data: {
    siteConfig,
    bookings: [],
    profileActions
  },
  onShow() {
    this.setData({ bookings: wx.getStorageSync("bookings") || [] });
  },
  goBooking() {
    wx.navigateTo({ url: "/pages/booking/index" });
  },
  handleAction(event) {
    const title = event.currentTarget.dataset.title;
    if (title === "我的孩子") {
      wx.navigateTo({ url: "/pages/booking/index" });
      return;
    }
    if (title === "会员商城") {
      wx.switchTab({ url: "/pages/makerclub/index" });
      return;
    }
    wx.showToast({ title: `${title}待接入`, icon: "none" });
  },
  copyWechat() {
    wx.setClipboardData({
      data: siteConfig.publicAccount,
      success: () => wx.showToast({ title: "已复制" })
    });
  },
  clearBookings() {
    wx.showModal({
      title: "清空预约记录",
      content: "仅清空当前设备上的测试数据。",
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync("bookings");
          this.setData({ bookings: [] });
        }
      }
    });
  }
});
