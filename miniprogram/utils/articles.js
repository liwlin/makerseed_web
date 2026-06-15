const articleMaterials = [
  {
    id: "autumn-2025",
    type: "season",
    title: "种子创客工坊2025秋季班报名开启！",
    desc: "科技为翼，创新无界！2025秋季课程开启！",
    publishedAt: "2025-07-01 19:55",
    link: "https://mp.weixin.qq.com/s?__biz=MzIzMTc3MDQwOQ==&mid=2247491809&idx=1&sn=2a06ff9fd8ab317b630d5d10d0240c51&chksm=e9a0efe5ca11c2af72b20971fb369347dd0bdfae040968c0f7a78da7809f3269ad5a2da644de#rd",
    cover: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/lSNsk90PAy0mVh8bbsDqKdY7Ml5vxKoHcY6upLJ0pIRSfEYvIs7X77TXCnu1H4omSSKU29YTypwnq998wUaIoA/0?wx_fmt=jpeg"
  },
  {
    id: "science-workshop-2025",
    type: "event",
    title: "畅玩-科创闯关主题工坊活动v2.0",
    desc: "玩转科技，趣味闯关，学知识赢大奖！解锁科创新体验。",
    publishedAt: "2025-08-21 17:22",
    link: "https://mp.weixin.qq.com/s?__biz=MzIzMTc3MDQwOQ==&mid=2247491817&idx=1&sn=b8952d27865efbea1229b6292ed612c1&chksm=e95d90a71c937433e14f676859308024220534570450fc4f6b3747ae7973ae240147c390512e#rd",
    cover: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/lSNsk90PAy1nDMmib7WorR9S91vgkqNrvq8WN4uMhE9GTM3BCBpwiazghySGnvSMTEibXBKaT01SBFic1uOkHLJGkg/0?wx_fmt=jpeg"
  },
  {
    id: "summer-2025",
    type: "camp",
    title: "2025#暑假造物营开启！硬核课程持续更新输出！",
    desc: "清凉一夏！造物不停！",
    publishedAt: "2025-06-13 21:00",
    link: "https://mp.weixin.qq.com/s?__biz=MzIzMTc3MDQwOQ==&mid=2247491791&idx=1&sn=a0fe556a09017bc04c8d6dbd33fa3f75&chksm=e91a6663804bdeba27626f7c0d08c45e45d38ed70b6490d9c076ae3fd270bdd3cdf4992d0491#rd",
    cover: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/lSNsk90PAy2xCz8Jjg5uAdodNgg1Gv25UiaHLwJjmXPGJVeLFCicQEciaLlt78FJnPibXMiaFjmP2mBE4M1icwNatWUQ/0?wx_fmt=jpeg"
  },
  {
    id: "winter-2025",
    type: "camp",
    title: "2025#寒假造物营开启！硬核课程更新推送中.........！",
    desc: "精彩依旧！造物不停！",
    publishedAt: "2024-12-10 22:22",
    link: "https://mp.weixin.qq.com/s?__biz=MzIzMTc3MDQwOQ==&mid=2247491490&idx=1&sn=a90bea9332e675459b0a65fb6b4ed3c3&chksm=e90e4e110ac0ef53dc79b50b696643aef64f16c375b458d73191d9b229d97fa50ce8fd4e2f5e#rd",
    cover: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/lSNsk90PAy2uibbxZTWt2MnFKDibYFKnKicavChwQuzvAX55ialLic9B7HHbsz7NccqnflZhickkjvPlXMia2T7UPEITQ/0?wx_fmt=jpeg"
  }
];

function findArticle(id) {
  return articleMaterials.find((article) => article.id === id);
}

module.exports = {
  articleMaterials,
  findArticle
};
