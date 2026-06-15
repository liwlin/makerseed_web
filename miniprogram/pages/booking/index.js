const { courses } = require("../../utils/courses");
const { signupGroups } = require("../../utils/app-data");
const { siteConfig } = require("../../utils/site-config");

const groupCourseNames = signupGroups.reduce((names, group) => {
  group.courses.forEach((course) => names.push(course.title));
  return names;
}, []);

Page({
  data: {
    siteConfig,
    interests: [
      ...courses.map((course) => course.title),
      ...groupCourseNames,
      "综合项目制课程"
    ],
    gradeOptions: ["幼儿园大班", "小学一年级", "小学二年级", "小学三年级", "小学四年级", "小学五年级", "小学六年级", "初中一年级", "初中二年级", "初中三年级"],
    selectedInterest: "",
    selectedGrade: "",
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
  changeGrade(event) {
    const index = Number(event.detail.value);
    this.setData({ selectedGrade: this.data.gradeOptions[index] });
  },
  submitBooking(event) {
    const value = event.detail.value;
    const booking = {
      student: value.student.trim(),
      age: value.age.trim(),
      grade: this.data.selectedGrade,
      phone: value.phone.trim(),
      interest: this.data.selectedInterest,
      note: value.note.trim(),
      campus: this.data.siteConfig.campusName,
      status: "待联系",
      createdAt: new Date().toLocaleString()
    };

    if (!booking.student || !booking.age || !booking.grade || !booking.phone || !booking.interest) {
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
        this.setData({ selectedInterest: "", selectedGrade: "", form: {} });
        wx.switchTab({ url: "/pages/profile/index" });
      }
    });
  }
});
