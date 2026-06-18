const { honors, media, schools } = require("../../../utils/app-data");

Page({
  data: {
    media,
    honors,
    schools
  },
  goFaculty() {
    wx.navigateTo({ url: "/pages/student/org-faculty/index" });
  }
});
