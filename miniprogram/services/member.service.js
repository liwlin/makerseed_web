const { siteConfig } = require("../utils/site-config");

function getMemberInfo() {
  return Promise.resolve({
    level: siteConfig.memberLevel.name,
    points: siteConfig.memberLevel.currentValue,
    targetValue: siteConfig.memberLevel.targetValue,
    status: "active"
  });
}

module.exports = {
  getMemberInfo
};
