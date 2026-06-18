const { media, honors, schools, faculty } = require("../../../utils/app-data");

Page({
  data: {
    active: "strength",
    media,
    honors,
    schools,
    faculty
  },
  onShow() {
    const target = wx.getStorageSync("makerseedOrgTab");
    if (target === "strength" || target === "faculty") {
      this.setData({ active: target });
      wx.removeStorageSync("makerseedOrgTab");
    }
  },
  showStrength() {
    this.setData({ active: "strength" });
  },
  showFaculty() {
    this.setData({ active: "faculty" });
  }
});
