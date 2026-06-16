const { courseFamilies, media, projectPosters, signupGroups } = require("../../utils/app-data");
const { siteConfig } = require("../../utils/site-config");
const { articleMaterials } = require("../../utils/articles");

Page({
  data: {
    siteConfig,
    courseFamilies,
    media,
    projectPosters,
    groups: signupGroups,
    articleMaterials,
    cards: [
      { title: "小学常规课", desc: "面向 1-6 年级学生的系列《创造者》课程", color: "purple", group: "primary" },
      { title: "初中赛事课", desc: "机器人、信息科技、工程挑战赛事训练", color: "orange", group: "middle" },
      { title: "寒暑假营", desc: "集中完成主题作品与展示", color: "violet", group: "camp" }
    ]
  },
  viewGroup(event) {
    const group = event.currentTarget.dataset.group;
    wx.navigateTo({ url: `/pages/course-detail/index?group=${group}` });
  },
  goBooking() {
    wx.navigateTo({ url: "/pages/booking/index" });
  },
  copyArticle(event) {
    const link = event.currentTarget.dataset.link;
    wx.setClipboardData({
      data: link,
      success: () => wx.showToast({ title: "原文链接已复制" })
    });
  },
  onReady() {}
});
