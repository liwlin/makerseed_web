const { courses: allCourses } = require("../../utils/courses");

Page({
  data: {
    categories: [
      { label: "全部", value: "all" },
      { label: "季节课", value: "season" },
      { label: "编程", value: "code" },
      { label: "制造", value: "make" },
      { label: "机器人", value: "robot" }
    ],
    activeCategory: "all",
    visibleCourses: allCourses
  },
  changeCategory(event) {
    const value = event.currentTarget.dataset.value;
    this.setData({
      activeCategory: value,
      visibleCourses: value === "all" ? allCourses : allCourses.filter((course) => course.category === value)
    });
  },
  bookCourse(event) {
    const title = event.currentTarget.dataset.title;
    wx.setStorageSync("pendingCourse", title);
    wx.navigateTo({ url: "/pages/booking/index" });
  },
  viewCourse(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/course-detail/index?id=${id}` });
  },
  copyLink(event) {
    const url = event.currentTarget.dataset.url;
    if (!url) {
      wx.showToast({ title: "可直接预约咨询", icon: "none" });
      return;
    }
    wx.setClipboardData({
      data: url,
      success: () => wx.showToast({ title: "链接已复制" })
    });
  }
});
