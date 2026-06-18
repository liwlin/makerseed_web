const { courseFamilies, posters } = require("../../../utils/app-data");

Page({
  data: {
    courseFamilies,
    posters
  },
  goCourse(event) {
    wx.navigateTo({ url: `/pages/student/course-detail/index?id=${event.currentTarget.dataset.id}` });
  }
});
