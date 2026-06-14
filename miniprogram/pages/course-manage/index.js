Page({
  data: {
    active: "current",
    bookings: [],
    visibleCourses: [],
    tabs: [
      { label: "当前课程", value: "current" },
      { label: "以往课程", value: "past" }
    ]
  },
  onShow() {
    this.refreshCourses();
  },
  switchTab(event) {
    this.setData({ active: event.currentTarget.dataset.value }, () => this.refreshCourses());
  },
  refreshCourses() {
    const bookings = wx.getStorageSync("bookings") || [];
    const visibleCourses = this.data.active === "current" ? bookings : [];
    this.setData({ bookings, visibleCourses });
  },
  goSignup() {
    wx.switchTab({ url: "/pages/signup/index" });
  },
  goBooking(event) {
    const title = event.currentTarget.dataset.title || "综合项目制课程";
    wx.setStorageSync("pendingCourse", title);
    wx.navigateTo({ url: "/pages/booking/index" });
  },
  clearBookings() {
    wx.showModal({
      title: "清空测试课程",
      content: "这只会清空当前设备上的预约/课程测试数据。",
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync("bookings");
          this.refreshCourses();
        }
      }
    });
  }
});
