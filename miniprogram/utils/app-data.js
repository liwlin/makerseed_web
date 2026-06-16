const { siteConfig } = require("./site-config");

const media = {
  campusHero: "/images/media/photos/workshop-space.jpg",
  campusCard: "/images/media/photos/school-visit-crowd.jpg",
  handsOn: "/images/media/photos/teacher-handson.jpg",
  carnival: "/images/media/photos/event-carnival-award.jpg",
  schoolVisit: "/images/media/photos/school-visit-makerseed.jpg",
  trainDrone: "/images/media/photos/train-drone.jpg",
  trainJianghua: "/images/media/photos/train-jianghua.jpg",
  logo: "/images/media/brand/logo.png",
  logoHorizontal: "/images/media/brand/logo-horizontal.png"
};

const campusList = [
  {
    id: "jiangmen-wanda",
    city: siteConfig.city,
    name: siteConfig.campusName,
    address: siteConfig.campusAddress,
    summary: siteConfig.positioning,
    image: media.campusCard,
    tags: ["激光切割", "3D 打印", "机器人", "FPV 无人机"]
  }
];

const courseFamilies = [
  {
    id: "brainstorm",
    title: "头脑风暴",
    subtitle: "STEAM 机器人",
    startAge: "6 岁 / 一年级+",
    color: "#39B0E3",
    image: "/images/media/posters/pbl-smart-toy.jpg"
  },
  {
    id: "coding",
    title: "编程研习社",
    subtitle: "Scratch / Python / C++",
    startAge: "8 岁 / 三年级+",
    color: "#F4B721",
    image: "/images/media/posters/pbl-processing.jpg"
  },
  {
    id: "making",
    title: "智能智造",
    subtitle: "数字制造与创客项目",
    startAge: "9 岁 / 四年级+",
    color: "#3AAA4A",
    image: "/images/media/posters/pbl-mech-factory.jpg"
  },
  {
    id: "rc",
    title: "科技模型",
    subtitle: "无人机 / 车模 / 模拟飞行",
    startAge: "8 岁 / 三年级+",
    color: "#DE3B2F",
    image: "/images/media/posters/pbl-drone.jpg"
  },
  {
    id: "ai",
    title: "AI 创意应用",
    subtitle: "人工智能与创意编程",
    startAge: "12 岁 / 六年级+",
    color: "#23459E",
    image: "/images/media/posters/pbl-rc-racing.jpg"
  }
];

const signupGroups = [
  {
    id: "primary",
    label: "小学",
    title: "小学常规课",
    subtitle: "面向 1-6 年级学生的系列《创造者》课程",
    intro: "从工具安全、结构制作、电子控制到数字工具，按年级和经验逐级推进。",
    hero: media.handsOn,
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
        accent: "#6144d8",
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
        accent: "#23459E",
        outcomes: ["使用代码表达规则和逻辑", "用数据记录测试结果并做判断", "完成软硬件结合的综合作品"]
      }
    ],
    packageItems: ["材料包", "项目教材", "课后 BWH 挑战"],
    classSetup: ["小班项目制", "每节课作品推进", "阶段展示与复盘"]
  },
  {
    id: "middle",
    label: "初中",
    title: "初中赛事课",
    subtitle: "机器人、信息科技、工程挑战赛事训练",
    intro: "围绕真实任务、赛事场景和工程表达，训练方案设计、协作执行与抗压复盘。",
    hero: media.trainJianghua,
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
        accent: "#3AAA4A",
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
    label: "寒暑假营",
    title: "寒暑假造物营",
    subtitle: "假期集中项目营与独立挑战营",
    intro: "用更集中的时间完成主题项目，让孩子在短周期里经历设计、制作、测试和展示。",
    hero: media.carnival,
    matrix: [
      { grade: "7-12 岁", course: "夏令营" },
      { grade: "有基础学员", course: "独立营" }
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

const projectPosters = [
  { title: "造物主题工坊", subtitle: "周末节假日 PBL 项目", image: "/images/media/posters/pbl-smart-toy.jpg" },
  { title: "机械工厂", subtitle: "结构、传动与调试", image: "/images/media/posters/pbl-mech-factory.jpg" },
  { title: "无人机任务", subtitle: "FPV 与飞行控制", image: "/images/media/posters/pbl-drone.jpg" },
  { title: "RC 竞速模型", subtitle: "速度、稳定与工程优化", image: "/images/media/posters/pbl-rc-racing.jpg" }
];

const heroStories = [
  { title: "学校科创服务", desc: "进校园、师训、科技节与社团共建", image: media.schoolVisit },
  { title: "赛事与展示", desc: "把作品带到真实场景接受反馈", image: media.carnival }
];

const memberBenefits = [
  { title: "生日礼盒", icon: "礼" },
  { title: "数理评估", icon: "评" },
  { title: "大咖讲座", icon: "讲" },
  { title: "专属咨询", icon: "问" },
  { title: "升学规划", icon: "升" },
  { title: "人工智能", icon: "AI" },
  { title: "礼卡", icon: "卡" }
];

const profileActions = [
  { title: "我的订单", color: "purple", icon: "单" },
  { title: "我的发票", color: "orange", icon: "票" },
  { title: "我的孩子", color: "orange", icon: "孩" },
  { title: "会员商城", color: "purple", icon: "商" }
];

module.exports = {
  media,
  campusList,
  signupGroups,
  courseFamilies,
  projectPosters,
  heroStories,
  memberBenefits,
  profileActions
};
