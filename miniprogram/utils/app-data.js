const { siteConfig } = require("./site-config");

const media = {
  logo: "/images/media/brand/logo.png",
  logoHorizontal: "/images/media/brand/logo-horizontal.png",
  whiteLogo: "/images/logo-wide-white.png",
  squareLogo: "/images/logo.png",
  workshopSpace: "/images/media/photos/workshop-space.jpg",
  schoolVisitCrowd: "/images/media/photos/school-visit-crowd.jpg",
  schoolVisitMakerseed: "/images/media/photos/school-visit-makerseed.jpg",
  teacherHandson: "/images/media/photos/teacher-handson.jpg",
  carnivalAward: "/images/media/photos/event-carnival-award.jpg",
  trainDrone: "/images/media/photos/train-drone.jpg",
  trainJianghua: "/images/media/photos/train-jianghua.jpg",
  pblSmartToy: "/images/media/posters/pbl-smart-toy.jpg",
  pblMechFactory: "/images/media/posters/pbl-mech-factory.jpg",
  pblDrone: "/images/media/posters/pbl-drone.jpg",
  pblProcessing: "/images/media/posters/pbl-processing.jpg",
  pblRcRacing: "/images/media/posters/pbl-rc-racing.jpg",
  rndOverview: "/images/media/rnd/rnd-2.jpg"
};

const campus = {
  id: "jiangmen-wanda",
  city: siteConfig.city,
  name: "种子创客工坊 江门校区",
  tag: "江门市科普教育基地 · 实景空间",
  address: siteConfig.campusAddress,
  phoneText: "130 6625 2826（微信同号）",
  image: media.workshopSpace
};

const seasons = ["春季班", "暑假营", "秋季班", "寒假营"];

const courseFamilies = [
  {
    id: "brainstorm",
    title: "头脑风暴",
    subtitle: "STEAM 机器人 · 1.0 / 2.0 / 3.0",
    kind: "STEAM 机器人类",
    age: "6岁+",
    fit: "6 岁 / 一年级+",
    color: "#39B0E3",
    soft: "#e7f5fc",
    icon: "机",
    projects: ["结构小车", "自动避障", "机械任务"]
  },
  {
    id: "coding",
    title: "编程研习社",
    subtitle: "Scratch / Python / C++",
    kind: "编程类",
    age: "8岁+",
    fit: "8 岁 / 三年级+",
    color: "#F4B721",
    soft: "#fdf3da",
    icon: "</>",
    projects: ["图形化编程", "Python", "算法思维"]
  },
  {
    id: "smart",
    title: "智能智造",
    subtitle: "开源硬件 / 物联网 / 3D",
    kind: "创客类",
    age: "9岁+",
    fit: "9 岁 / 四年级+",
    color: "#3AAA4A",
    soft: "#e8f6ea",
    icon: "芯",
    projects: ["物联网", "数字建模", "激光切割"]
  },
  {
    id: "rc",
    title: "科技模型",
    subtitle: "无人机 / 车模 / 航模",
    kind: "RC 科技体育类",
    age: "8岁+",
    fit: "8 岁 / 三年级+",
    color: "#DE3B2F",
    soft: "#fdeceb",
    icon: "航",
    projects: ["FPV", "RC 竞速", "模拟飞行"]
  },
  {
    id: "ai",
    title: "AI 创意应用",
    subtitle: "视觉识别 / 深度学习",
    kind: "人工智能类",
    age: "12岁+",
    fit: "12 岁 / 六年级+",
    color: "#23459E",
    soft: "#e9edf8",
    icon: "AI",
    projects: ["视觉识别", "数据应用", "AI 创作"]
  }
];

const signupEntries = [
  { id: "regular", title: "常规课", icon: "+", tone: "blue" },
  { id: "competition", title: "赛事课", icon: "🏁", tone: "orange" },
  { id: "camp", title: "冬夏令营", icon: "⛺", tone: "purple" }
];

const schoolTabs = ["小学", "初中", "冬夏令营"];

const featuredSeason = {
  title: "春季 STEAM 项目课",
  meta: "7–15 岁 · 周末班 · 结构·电子·编程·展示",
  desc: "智械骋旧轮，科创承来路"
};

const memberBenefits = [
  { title: "生日礼盒", icon: "🎁" },
  { title: "数理评估", icon: "📊" },
  { title: "创客讲座", icon: "🎤" },
  { title: "专属咨询", icon: "💬" },
  { title: "升学规划", icon: "🧭" },
  { title: "人工智能", icon: "🤖" },
  { title: "礼卡", icon: "🎫" },
  { title: "更多", icon: "⋯" }
];

const rewardColor = "#ffb020";

const currentCourses = [
  {
    title: "机器人与自动控制",
    label: "机器人",
    time: "周六 10:00 · 第 8/13 课",
    progress: 62,
    next: "下一节 · 自动避障挑战",
    color: "#0079c8",
    soft: "#fff1ec"
  },
  {
    title: "秋季 STEAM 项目课",
    label: "秋季",
    time: "周日 14:00 · 第 5/16 课",
    progress: 31,
    next: "结构与传动测试",
    color: "#f0a008",
    soft: "#fff7e6"
  }
];

const pastCourses = [
  { title: "暑假造物营", time: "2025 暑期 · 已结营", progress: 100, color: "#3AAA4A" },
  { title: "科创闯关主题工坊", time: "活动体验 · 已完成", progress: 100, color: "#DE3B2F" }
];

const profileActions = [
  { title: "我的订单", icon: "📦", color: "#f0ecff" },
  { title: "我的发票", icon: "🧾", color: "#fff1ec" },
  { title: "我的孩子", icon: "👦", color: "#fff7e6" },
  { title: "会员商城", icon: "🛒", color: "#e8f4ff" }
];

const honors = [
  { year: "2024", title: "全球发明大会中国区总决赛 一等奖" },
  { year: "2023", title: "广东省青创大赛 小学组 一等奖（江门唯一）" }
];

const schools = ["范罗冈小学", "紫茶小学", "江门一中", "棠下初中", "等多所"];

const faculty = [
  { name: "李伟林", role: "负责人 · 联合创始人", desc: "工信部认证讲师 · 深耕创客十年+", image: "/images/media/faculty/liweilin.jpg" },
  { name: "肖泽海", role: "负责人 · 联合创始人", desc: "ASFC 航模飞行员 · RC 优秀教练", image: "/images/media/faculty/xiaozehai.jpg" },
  { name: "张朦朦", role: "机器人教育专业教师", desc: "擅长低龄段 · 辅导超 5000 人次", image: "/images/media/faculty/zhangmengmeng.jpg" }
];

const posters = [
  media.pblSmartToy,
  media.pblMechFactory,
  media.pblDrone
];

module.exports = {
  media,
  campus,
  seasons,
  featuredSeason,
  courseFamilies,
  signupEntries,
  schoolTabs,
  memberBenefits,
  rewardColor,
  currentCourses,
  pastCourses,
  profileActions,
  honors,
  schools,
  faculty,
  posters
};
