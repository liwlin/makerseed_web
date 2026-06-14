const { findCourse } = require("../../utils/courses");

Page({
  data: {
    course: null
  },
  onLoad(options) {
    const course = findCourse(options.id);
    if (!course) {
      wx.showToast({ title: "课程不存在", icon: "none" });
      setTimeout(() => wx.navigateBack(), 800);
      return;
    }
    this.setData({ course });
    wx.setNavigationBarTitle({ title: course.title });
  },
  bookCourse() {
    wx.setStorageSync("pendingCourse", this.data.course.title);
    wx.switchTab({ url: "/pages/booking/index" });
  },
  copyLink() {
    const { link } = this.data.course;
    if (!link) {
      wx.showToast({ title: "请预约后咨询详情", icon: "none" });
      return;
    }
    wx.setClipboardData({
      data: link,
      success: () => wx.showToast({ title: "原文链接已复制" })
    });
  }
});
