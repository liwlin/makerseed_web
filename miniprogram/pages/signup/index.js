const { signupGroups } = require("../../utils/app-data");
const { siteConfig } = require("../../utils/site-config");

Page({
  data: {
    siteConfig,
    cards: [
      { title: "小学常规课", desc: "面向 1-6 年级的项目制创客课程", color: "purple", group: "primary" },
      { title: "初中赛事课", desc: "机器人、信息科技、工程挑战赛事训练", color: "orange", group: "middle" },
      { title: "冬夏令营", desc: "假期集中完成作品与展示", color: "violet", group: "camp" }
    ]
  },
  viewGroup(event) {
    const group = event.currentTarget.dataset.group;
    wx.navigateTo({ url: `/pages/course-detail/index?group=${group}` });
  },
  goBooking() {
    wx.navigateTo({ url: "/pages/booking/index" });
  },
  onReady() {
    this.setData({ groups: signupGroups });
  }
});
