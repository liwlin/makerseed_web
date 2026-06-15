const { findArticle } = require("./articles");

const courses = [
  {
    id: "spring-autumn-steam",
    title: "秋季 STEAM 项目课",
    tag: "秋季班",
    age: "7-15 岁",
    category: "season",
    summary: "持续型项目制课程，围绕结构、电子、编程和展示逐步完成作品。来自 2025 秋季班官方课程图文资料。",
    points: ["每周稳定推进", "适合长期能力培养", "官方图文资料可复制查看"],
    outcomes: ["完成可展示的创客作品", "掌握设计、制作、调试的基本流程", "形成持续记录和复盘习惯"],
    projects: ["结构与机械小车", "传感器互动装置", "自动控制挑战任务"],
    packageItems: ["项目材料", "课程教材", "课后挑战"],
    classSetup: ["每周稳定上课", "小班项目制推进", "阶段作品展示"],
    source: findArticle("autumn-2025"),
    link: findArticle("autumn-2025").link
  },
  {
    id: "summer-maker-camp",
    title: "暑假造物营",
    tag: "暑假",
    age: "7-15 岁",
    category: "season",
    summary: "假期集中完成主题作品，适合体验进阶和项目成果展示。资料来自 2025 暑假造物营官方图文。",
    points: ["短周期高反馈", "作品目标明确", "官方暑假课程可复制查看"],
    outcomes: ["在假期完成一个完整项目", "提升动手、协作和抗压能力", "建立工程迭代意识"],
    projects: ["机器人主题挑战", "FPV / RC 操控体验", "数字制造作品营"],
    packageItems: ["营期材料", "主题任务书", "作品带回"],
    classSetup: ["假期集中学习", "主题挑战任务", "结营展示复盘"],
    source: findArticle("summer-2025"),
    link: findArticle("summer-2025").link
  },
  {
    id: "winter-maker-camp",
    title: "寒假造物营",
    tag: "寒假",
    age: "7-15 岁",
    category: "season",
    summary: "寒假集中项目营，围绕硬核创客主题持续输出作品，适合假期深度体验。",
    points: ["集中项目营", "造物不停", "官方寒假课程可复制查看"],
    outcomes: ["完成一个假期主题作品", "训练方案执行与调试复盘", "建立工程思维和作品表达"],
    projects: ["数字加工主题", "机器人/机械结构挑战", "创客作品展示"],
    packageItems: ["营期材料", "任务手册", "展示复盘"],
    classSetup: ["假期集中推进", "主题作品输出", "结营展示"],
    source: findArticle("winter-2025"),
    link: findArticle("winter-2025").link
  },
  {
    id: "science-workshop",
    title: "科创闯关主题工坊",
    tag: "活动",
    age: "6-15 岁",
    category: "event",
    summary: "玩转科技、趣味闯关，在任务中学知识、赢奖励，适合作为科创启蒙体验活动。",
    points: ["趣味闯关", "科创体验", "官方活动资料可复制查看"],
    outcomes: ["体验多种科创任务", "在闯关中理解科学与工程概念", "激发继续造物的兴趣"],
    projects: ["科创任务闯关", "工具体验", "趣味挑战"],
    packageItems: ["活动任务卡", "闯关材料", "奖章/奖励"],
    classSetup: ["主题活动", "分站闯关", "即时反馈"],
    source: findArticle("science-workshop-2025"),
    link: findArticle("science-workshop-2025").link
  },
  {
    id: "coding-thinking",
    title: "少儿编程与计算思维",
    tag: "编程",
    age: "6-14 岁",
    category: "code",
    summary: "通过图形化编程、Python 和 Arduino 项目训练问题拆解与调试能力。",
    points: ["算法启蒙", "程序调试", "互动作品"],
    outcomes: ["理解顺序、循环、条件和变量", "能用程序控制真实硬件", "学会定位和修复程序问题"],
    projects: ["互动小游戏", "Arduino 灯光控制", "传感器数据可视化"],
    packageItems: ["编程任务卡", "硬件材料", "调试记录"],
    classSetup: ["由浅入深", "软硬件结合", "作品展示"],
    link: ""
  },
  {
    id: "robot-control",
    title: "机器人与自动控制",
    tag: "机器人",
    age: "8-16 岁",
    category: "robot",
    summary: "学习传感器、执行器、机械结构和控制策略，完成挑战任务。",
    points: ["结构搭建", "传感器应用", "挑战赛任务"],
    outcomes: ["理解机器人的感知、决策和执行", "能搭建稳定结构并完成任务", "能根据测试结果调参优化"],
    projects: ["循迹机器人", "机械臂任务", "自动避障挑战"],
    packageItems: ["机器人材料", "任务地图", "复盘表"],
    classSetup: ["任务驱动", "测试调参", "挑战赛模拟"],
    link: ""
  },
  {
    id: "digital-fabrication",
    title: "数字制造与产品原型",
    tag: "制造",
    age: "8-16 岁",
    category: "make",
    summary: "用 3D 打印、激光切割、CNC 和设计软件把创意变成实体原型。",
    points: ["三维建模", "材料加工", "工程迭代"],
    outcomes: ["掌握从草图到模型的表达方式", "理解材料、结构和加工限制", "能制作并改进可用原型"],
    projects: ["激光切割结构件", "3D 打印产品外壳", "CNC 小型零件"],
    packageItems: ["制作材料", "设计图纸", "加工记录"],
    classSetup: ["数字建模", "机器加工", "成品优化"],
    link: ""
  },
  {
    id: "fpv-rc-combat",
    title: "FPV / RC / 格斗机器人",
    tag: "竞速",
    age: "10-18 岁",
    category: "robot",
    summary: "结合机械、电控、动力系统、操控和安全规范，在高反馈项目中成长。",
    points: ["动力系统", "安全规范", "复盘抗压"],
    outcomes: ["理解动力和操控系统的关系", "建立安全测试与维护习惯", "通过对抗和竞速训练复盘能力"],
    projects: ["RC 竞速调校", "FPV 飞行基础", "格斗机器人结构强化"],
    packageItems: ["安全规范", "调试材料", "赛后复盘"],
    classSetup: ["安全优先", "高反馈训练", "对抗/竞速复盘"],
    link: ""
  }
];

function findCourse(id) {
  return courses.find((course) => course.id === id);
}

module.exports = {
  courses,
  findCourse
};
