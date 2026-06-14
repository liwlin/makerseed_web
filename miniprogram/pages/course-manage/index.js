Page({
  data: {
    active: "current",
    tabs: [
      { label: "当前课程", value: "current" },
      { label: "以往课程", value: "past" }
    ]
  },
  switchTab(event) {
    this.setData({ active: event.currentTarget.dataset.value });
  },
  goSignup() {
    wx.switchTab({ url: "/pages/signup/index" });
  }
});
