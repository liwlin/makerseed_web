const { findCourse } = require("../../utils/courses");
const { signupGroups } = require("../../utils/app-data");

Page({
  data: {
    course: null,
    group: null,
    activeCourse: null
  },
  onLoad(options) {
    if (options.group) {
      const group = signupGroups.find((item) => item.id === options.group);
      if (!group) {
        wx.showToast({ title: "课程组不存在", icon: "none" });
        setTimeout(() => wx.navigateBack(), 800);
        return;
      }
      this.setData({
        group,
        activeCourse: group.courses[0]
      });
      wx.setNavigationBarTitle({ title: group.label });
      return;
    }

    const course = findCourse(options.id);
    if (!course) {
      wx.showToast({ title: "课程不存在", icon: "none" });
      setTimeout(() => wx.navigateBack(), 800);
      return;
    }
    this.setData({ course });
    wx.setNavigationBarTitle({ title: course.title });
  },
  selectGroupCourse(event) {
    const { id } = event.currentTarget.dataset;
    const activeCourse = this.data.group.courses.find((item) => item.id === id);
    if (activeCourse) {
      this.setData({ activeCourse });
    }
  },
  bookCourse(event) {
    const dataset = event && event.currentTarget ? event.currentTarget.dataset : {};
    const title = dataset.title
      || (this.data.course && this.data.course.title)
      || (this.data.activeCourse && this.data.activeCourse.title)
      || (this.data.group && this.data.group.label)
      || "综合项目制课程";
    wx.setStorageSync("pendingCourse", title);
    wx.navigateTo({ url: "/pages/booking/index" });
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
