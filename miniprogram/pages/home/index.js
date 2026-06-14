Page({
  data: {
    features: [
      { mark: "STEAM", title: "跨学科项目", text: "科学、工程、数学、设计结合真实作品。" },
      { mark: "MAKE", title: "数字制造", text: "激光切割、3D 打印、CNC 与开源硬件。" },
      { mark: "RACE", title: "高反馈挑战", text: "机器人、RC、FPV 与格斗机器人项目。" }
    ],
    loop: [
      { title: "设计", text: "从问题和限制出发，画草图、拆结构、定目标。" },
      { title: "建造", text: "用工具把想法做成真实可测试的原型。" },
      { title: "编程", text: "让作品具备感知、控制、交互和联网能力。" },
      { title: "反思改进", text: "记录测试结果，复盘失败并继续迭代。" }
    ]
  },
  goBooking() {
    wx.switchTab({ url: "/pages/booking/index" });
  },
  goCourses() {
    wx.switchTab({ url: "/pages/courses/index" });
  }
});
