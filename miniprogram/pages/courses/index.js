const allCourses = [
  {
    title: "春秋季 STEAM 项目课",
    tag: "春秋季",
    age: "7-15 岁",
    category: "season",
    summary: "持续型项目制课程，围绕结构、电子、编程和展示逐步完成作品。",
    points: ["每周稳定推进", "适合长期能力培养", "公众号课程介绍可复制查看"],
    link: "https://mp.weixin.qq.com/s/pHvM6vADUsP_PVRNrlVeNw"
  },
  {
    title: "暑假创客营",
    tag: "暑假",
    age: "7-15 岁",
    category: "season",
    summary: "假期集中完成主题作品，适合体验进阶和项目成果展示。",
    points: ["短周期高反馈", "作品目标明确", "公众号暑假课程可复制查看"],
    link: "https://mp.weixin.qq.com/s/2Us_7YtPTEWQckH1mBOA9g"
  },
  {
    title: "少儿编程与计算思维",
    tag: "编程",
    age: "6-14 岁",
    category: "code",
    summary: "通过图形化编程、Python 和 Arduino 项目训练问题拆解与调试能力。",
    points: ["算法启蒙", "程序调试", "互动作品"],
    link: ""
  },
  {
    title: "机器人与自动控制",
    tag: "机器人",
    age: "8-16 岁",
    category: "robot",
    summary: "学习传感器、执行器、机械结构和控制策略，完成挑战任务。",
    points: ["结构搭建", "传感器应用", "挑战赛任务"],
    link: ""
  },
  {
    title: "数字制造与产品原型",
    tag: "制造",
    age: "8-16 岁",
    category: "make",
    summary: "用 3D 打印、激光切割、CNC 和设计软件把创意变成实体原型。",
    points: ["三维建模", "材料加工", "工程迭代"],
    link: ""
  },
  {
    title: "FPV / RC / 格斗机器人",
    tag: "竞速",
    age: "10-18 岁",
    category: "robot",
    summary: "结合机械、电控、动力系统、操控和安全规范，在高反馈项目中成长。",
    points: ["动力系统", "安全规范", "复盘抗压"],
    link: ""
  }
];

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
    wx.switchTab({ url: "/pages/booking/index" });
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
