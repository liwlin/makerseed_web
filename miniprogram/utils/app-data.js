const { siteConfig } = require("./site-config");

const campusList = [
  {
    id: "jiangmen-main",
    city: siteConfig.city,
    name: siteConfig.campusName,
    address: siteConfig.campusAddress,
    summary: siteConfig.positioning
  }
];

const signupGroups = [
  {
    id: "primary",
    label: "小学",
    subtitle: "面向 1-6 年级学生的系列创造者课程",
    intro: "从工具安全、结构制作、电子控制到数字工具，按年级和经验逐级推进。",
    matrix: [
      { grade: "G1-G2 新生", course: "Explorer" },
      { grade: "G2 老生-G3 新生", course: "Maker" },
      { grade: "G3 老生-G4/G5 新生", course: "Engineering" },
      { grade: "G4-G5 进阶", course: "Technology" },
      { grade: "G5 老生-G6 新生", course: "Digital Discovery" }
    ],
    courses: [
      {
        id: "explorer",
        title: "创造者 Explorer",
        short: "Explorer",
        subtitle: "创客启蒙与工具探索",
        fit: "适合 1-2 年级学生",
        accent: "#ff5a36",
        outcomes: ["认识常用工具与安全规则", "完成结构、纸电路和简单机械作品", "形成记录、展示和复盘习惯"]
      },
      {
        id: "maker",
        title: "创造者 Maker",
        short: "Maker",
        subtitle: "结构设计与电子制作",
        fit: "适合 2-3 年级学生",
        accent: "#8f3dd6",
        outcomes: ["理解材料、连接和稳定结构", "使用基础电路和传感器完成互动作品", "学会按测试结果改进作品"]
      },
      {
        id: "engineering",
        title: "创造者 Engineering",
        short: "Engineering",
        subtitle: "机械结构与工程挑战",
        fit: "适合 3-5 年级学生",
        accent: "#4b1f68",
        outcomes: ["拆解工程问题并建立方案", "完成机械传动和任务挑战", "用数据和现象支持改进判断"]
      },
      {
        id: "technology",
        title: "创造者 Technology",
        short: "Technology",
        subtitle: "机器人、物联网与自动控制",
        fit: "适合 4-5 年级进阶学生",
        accent: "#0079c8",
        outcomes: ["理解输入、处理、输出的系统关系", "使用控制板和传感器完成自动任务", "建立调试和参数优化方法"]
      },
      {
        id: "digital-discovery",
        title: "创造者 Digital Discovery",
        short: "Digital Discovery",
        subtitle: "数字工具、数据与代码编程",
        fit: "适合 5-6 年级学生",
        accent: "#6144d8",
        outcomes: ["使用代码表达规则和逻辑", "用数据记录测试结果并做判断", "完成软硬件结合的综合作品"]
      }
    ],
    packageItems: ["材料包", "项目教材", "课后 BWH 挑战"],
    classSetup: ["小班项目制", "每节课作品推进", "阶段展示与复盘"]
  },
  {
    id: "middle",
    label: "初中",
    subtitle: "面向初中阶段的跨学科项目与赛事训练",
    intro: "围绕真实任务、赛事场景和工程表达，训练方案设计、协作执行与抗压复盘。",
    matrix: [
      { grade: "初一", course: "Integrated Application" },
      { grade: "初二", course: "领航第一年" },
      { grade: "初三", course: "领航第二年" }
    ],
    courses: [
      {
        id: "integrated",
        title: "Integrated Application",
        short: "Integrated",
        subtitle: "跨学科探索与实践",
        fit: "适合初中一年级学生",
        accent: "#25a66a",
        outcomes: ["完成跨学科主题项目", "建立工程文档和展示表达", "练习团队分工与项目管理"]
      },
      {
        id: "navigator-one",
        title: "领航第一年",
        short: "Navigator 1",
        subtitle: "机器人、物联网与自动控制",
        fit: "适合初中二年级学生",
        accent: "#0079c8",
        outcomes: ["围绕赛事任务搭建系统", "提升控制、结构和调试效率", "形成稳定备赛节奏"]
      },
      {
        id: "navigator-two",
        title: "领航第二年",
        short: "Navigator 2",
        subtitle: "数字制造、算法与综合挑战",
        fit: "适合初中三年级学生",
        accent: "#6144d8",
        outcomes: ["独立承担复杂项目模块", "用数据复盘方案优劣", "完成公开展示或赛事交付"]
      }
    ],
    packageItems: ["赛事材料", "项目手册", "赛后复盘"],
    classSetup: ["任务驱动", "阶段路演", "赛事/作品双路径"]
  },
  {
    id: "camp",
    label: "冬夏令营",
    subtitle: "假期集中项目营与独立挑战营",
    intro: "用更集中的时间完成主题项目，让孩子在短周期里经历设计、制作、测试和展示。",
    matrix: [
      { grade: "7-12 岁", course: "2026 夏令营" },
      { grade: "有基础学员", course: "2026 独立营" }
    ],
    courses: [
      {
        id: "summer-maker-camp",
        title: "暑假造物营",
        short: "Summer Camp",
        subtitle: "硬核课程持续更新输出",
        fit: "假期集中项目制学习",
        accent: "#ff5a36",
        outcomes: ["集中完成一个主题作品", "体验高反馈调试过程", "完成营期展示与作品带回"]
      },
      {
        id: "winter-maker-camp",
        title: "寒假造物营",
        short: "Winter Camp",
        subtitle: "精彩依旧，造物不停",
        fit: "寒假集中项目制学习",
        accent: "#4b1f68",
        outcomes: ["完成一个假期主题作品", "持续调试并记录问题", "完成公开展示和复盘"]
      }
    ],
    packageItems: ["营期材料", "项目任务书", "作品展示"],
    classSetup: ["集中训练", "主题挑战", "结营展示"]
  }
];

const memberBenefits = [
  "生日礼盒",
  "数理评估",
  "创客讲座",
  "专属咨询",
  "升学规划",
  "人工智能",
  "礼卡"
];

const profileActions = [
  { title: "我的订单", color: "purple" },
  { title: "我的发票", color: "orange" },
  { title: "我的孩子", color: "orange" },
  { title: "会员商城", color: "purple" }
];

module.exports = {
  campusList,
  signupGroups,
  memberBenefits,
  profileActions
};
