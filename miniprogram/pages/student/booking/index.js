const { courseFamilies } = require("../../../utils/app-data");
const { siteConfig } = require("../../../utils/site-config");
const { createBooking } = require("../../../services/booking.service");

Page({
  data: {
    siteConfig,
    interests: courseFamilies.map((item) => item.title).concat(["机器人与自动控制", "综合项目制课程"]),
    grades: ["小学一年级", "小学二年级", "小学三年级", "小学四年级", "小学五年级", "小学六年级", "初中一年级", "初中二年级", "初中三年级"],
    selectedInterest: "",
    selectedGrade: ""
  },
  onShow() {
    const pendingCourse = wx.getStorageSync("pendingCourse");
    if (pendingCourse) {
      this.setData({ selectedInterest: pendingCourse });
      wx.removeStorageSync("pendingCourse");
    }
  },
  changeInterest(event) {
    this.setData({ selectedInterest: this.data.interests[Number(event.detail.value)] });
  },
  changeGrade(event) {
    this.setData({ selectedGrade: this.data.grades[Number(event.detail.value)] });
  },
  submitBooking(event) {
    const value = event.detail.value;
    const bookingInput = {
      studentName: value.student.trim(),
      contactPhone: value.phone.trim(),
      grade: this.data.selectedGrade,
      course: this.data.selectedInterest,
      channel: "student"
    };
    if (!bookingInput.studentName || !bookingInput.contactPhone || !bookingInput.grade || !bookingInput.course) {
      wx.showToast({ title: "请完整填写信息", icon: "none" });
      return;
    }
    createBooking(bookingInput).then(() => {
      wx.showModal({
        title: "预约已提交",
        content: "我们会通过电话或微信与你确认体验时间。",
        showCancel: false,
        success: () => wx.switchTab({ url: "/pages/student/profile/index" })
      });
    });
  }
});
