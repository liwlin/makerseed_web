Page({
  data: {
    interests: [
      "春秋季 STEAM 项目课",
      "暑假创客营",
      "少儿编程与计算思维",
      "机器人与自动控制",
      "数字制造与产品原型",
      "FPV / RC / 格斗机器人",
      "综合项目制课程"
    ],
    selectedInterest: "",
    form: {}
  },
  onShow() {
    const pendingCourse = wx.getStorageSync("pendingCourse");
    if (pendingCourse) {
      this.setData({ selectedInterest: pendingCourse });
      wx.removeStorageSync("pendingCourse");
    }
  },
  changeInterest(event) {
    const index = Number(event.detail.value);
    this.setData({ selectedInterest: this.data.interests[index] });
  },
  submitBooking(event) {
    const value = event.detail.value;
    const booking = {
      student: value.student.trim(),
      age: value.age.trim(),
      phone: value.phone.trim(),
      interest: this.data.selectedInterest,
      note: value.note.trim(),
      createdAt: new Date().toLocaleString()
    };

    if (!booking.student || !booking.age || !booking.phone || !booking.interest) {
      wx.showToast({ title: "请完整填写信息", icon: "none" });
      return;
    }

    const bookings = wx.getStorageSync("bookings") || [];
    bookings.unshift(booking);
    wx.setStorageSync("bookings", bookings);
    wx.showModal({
      title: "预约已保存",
      content: "我们已记录本次预约。正式上线后可接入通知与后台。",
      showCancel: false,
      success: () => {
        this.setData({ selectedInterest: "", form: {} });
        wx.switchTab({ url: "/pages/profile/index" });
      }
    });
  }
});
