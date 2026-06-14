Page({
  data: {
    bookings: []
  },
  onShow() {
    this.setData({ bookings: wx.getStorageSync("bookings") || [] });
  },
  goBooking() {
    wx.switchTab({ url: "/pages/booking/index" });
  },
  copyWechat() {
    wx.setClipboardData({
      data: "种子创客工坊",
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
