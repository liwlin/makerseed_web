const { siteConfig } = require("./site-config");

const campusList = [
  {
    id: "jiangmen-main",
    city: siteConfig.city,
    name: siteConfig.campusName,
    address: siteConfig.campusAddress,
    summary: "专注创客教育、STEAM 教育、机器人与数字制造的项目制学习空间。"
  }
];

const signupGroups = [
  {
    id: "primary",
    label: "小学",
    courses: [
      { id: "explorer", title: "创造者 Explorer", subtitle: "创客启蒙与工具探索", fit: "适合 1-2 年级学生", accent: "#ff5a36" },
      { id: "maker", title: "创造者 Maker", subtitle: "结构设计与电子制作", fit: "适合 2-3 年级学生", accent: "#8f3dd6" },
      { id: "engineering", title: "创造者 Engineering", subtitle: "机械结构与工程挑战", fit: "适合 3-5 年级学生", accent: "#4b1f68" }
    ]
  },
  {
    id: "middle",
    label: "初中",
    courses: [
      { id: "integrated", title: "Integrated Application", subtitle: "跨学科探索与实践", fit: "适合初中一年级学生", accent: "#25a66a" },
      { id: "tech", title: "Technology", subtitle: "机器人、物联网与自动控制", fit: "适合初中二年级学生", accent: "#0079c8" },
      { id: "digital", title: "Digital Discovery", subtitle: "数字工具、数据与代码编程", fit: "适合初中三年级学生", accent: "#6144d8" }
    ]
  },
  {
    id: "camp",
    label: "冬夏令营",
    courses: [
      { id: "summer-2026", title: "2026 夏令营", subtitle: "机器人、FPV、RC 与数字制造主题营", fit: "假期集中项目制学习", accent: "#ff5a36" },
      { id: "independent-camp", title: "2026 独立营", subtitle: "独立完成设计、建造、调试与展示", fit: "适合有项目基础的学生", accent: "#4b1f68" }
    ]
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
