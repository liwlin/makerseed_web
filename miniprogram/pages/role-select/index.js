const { login, switchRole } = require("../../services/auth.service");
const { ROLE_LABELS } = require("../../utils/permissions");

Page({
  data: {
    roles: []
  },
  onLoad() {
    login().then((user) => {
      this.setData({
        roles: user.roles.map((role) => ({
          role,
          label: ROLE_LABELS[role] || role
        }))
      });
    });
  },
  chooseRole(event) {
    const role = event.currentTarget.dataset.role;
    switchRole(role).then(({ home }) => {
      if (role === "parent") {
        wx.switchTab({ url: home });
      } else {
        wx.navigateTo({ url: home });
      }
    }).catch((error) => wx.showToast({ title: error.message, icon: "none" }));
  }
});
