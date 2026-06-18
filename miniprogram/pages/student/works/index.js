const { courseFamilies, currentCourses, pastCourses } = require("../../../utils/app-data");

Page({
  data: {
    active: "current",
    courseFamilies,
    currentCourses,
    pastCourses,
    tabs: [
      { label: "当前课程", value: "current" },
      { label: "以往课程", value: "past" }
    ]
  },
  switchTab(event) {
    this.setData({ active: event.currentTarget.dataset.value });
  },
  goSignup() {
    wx.switchTab({ url: "/pages/student/courses/index" });
  },
  goCourse(event) {
    wx.navigateTo({ url: `/pages/student/course-detail/index?id=${event.currentTarget.dataset.id}` });
  }
});
