const { siteConfig } = require("./utils/site-config");

App({
  globalData: {
    brand: siteConfig.brandName,
    slogan: siteConfig.slogan,
    phone: siteConfig.defaultPhone,
    address: siteConfig.campusAddress,
    publicAccount: siteConfig.publicAccount
  }
});
