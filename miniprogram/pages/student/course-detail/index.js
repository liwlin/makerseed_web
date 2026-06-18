const { courseFamilies } = require("../../../utils/app-data");

const robotCourse = {
  id: "robot",
  title: "机器人与自动控制",
  tag: "ROBOT · 机器人",
  fit: "8–16 岁 · 任务驱动项目课",
  fitShort: "8–16 岁",
  summary: "学习传感器、执行器、机械结构与控制策略，在测试与调参中完成挑战任务。",
  color: "#0079c8",
  projects: ["循迹机器人", "自动避障", "机械臂任务"],
  outcomes: ["理解机器人的感知、决策与执行", "搭建稳定结构并完成任务", "根据测试结果调参优化"]
};

Page({
  data: {
    course: robotCourse
  },
  onLoad(options) {
    const family = courseFamilies.find((item) => item.id === options.id);
    if (family) {
      this.setData({
        course: {
          id: family.id,
          title: family.title,
          tag: family.kind,
          fit: family.fit,
          fitShort: family.fit.split(" / ")[0],
          summary: `${family.subtitle}。用项目任务完成设计、建造、编程、调试与复盘。`,
          color: family.color,
          projects: family.projects,
          outcomes: ["完成可展示的项目作品", "理解工具、结构与系统之间的关系", "用测试结果推动下一轮改进"]
        }
      });
      wx.setNavigationBarTitle({ title: family.title });
    }
  },
  goBack() {
    const pages = getCurrentPages();
    if (pages.length > 1) {
      wx.navigateBack();
    } else {
      wx.switchTab({ url: "/pages/student/courses/index" });
    }
  },
  bookCourse() {
    wx.setStorageSync("pendingCourse", this.data.course.title);
    wx.navigateTo({ url: "/pages/student/booking/index" });
  }
});
