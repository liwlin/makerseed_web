const { courseFamilies, schoolTabs, signupEntries } = require("../../../utils/app-data");

Page({
  data: {
    activeTab: "小学",
    courseFamilies,
    schoolTabs,
    signupEntries
  },
  chooseTab(event) {
    this.setData({ activeTab: event.currentTarget.dataset.tab });
  },
  viewCourse(event) {
    wx.navigateTo({ url: `/pages/student/course-detail/index?id=${event.currentTarget.dataset.id}` });
  },
  goBooking() {
    wx.navigateTo({ url: "/pages/student/booking/index" });
  }
});
