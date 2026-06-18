const { requireRole } = require("../../../services/auth.service");
const { getMemberInfo } = require("../../../services/member.service");

Page({
  data: { member: {} },
  onLoad() {
    if (!requireRole("admin")) return;
    getMemberInfo().then((member) => this.setData({ member }));
  }
});
