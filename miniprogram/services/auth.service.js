const { getDefaultRole, getRoleHome, normalizeRoles } = require("../utils/permissions");

const MOCK_USER_KEY = "makerseedUser";
const ROLE_KEY = "makerseedCurrentRole";

function createMockUser() {
  return {
    _id: "local_parent_user",
    name: "家长您好",
    phone: "",
    roles: ["parent", "teacher", "admin"],
    defaultRole: "parent",
    status: "active"
  };
}

function login() {
  const cached = wx.getStorageSync(MOCK_USER_KEY);
  const user = cached || createMockUser();
  wx.setStorageSync(MOCK_USER_KEY, user);
  if (!wx.getStorageSync(ROLE_KEY)) {
    wx.setStorageSync(ROLE_KEY, getDefaultRole(user));
  }
  return Promise.resolve(user);
}

function getCurrentUser() {
  return wx.getStorageSync(MOCK_USER_KEY) || createMockUser();
}

function getCurrentRole() {
  const user = getCurrentUser();
  return wx.getStorageSync(ROLE_KEY) || getDefaultRole(user);
}

function switchRole(role) {
  const user = getCurrentUser();
  if (!normalizeRoles(user).includes(role)) {
    return Promise.reject(new Error("当前用户没有该角色"));
  }
  wx.setStorageSync(ROLE_KEY, role);
  return Promise.resolve({ role, home: getRoleHome(role) });
}

function requireRole(role) {
  const currentRole = getCurrentRole();
  if (currentRole !== role && !(role === "admin" && currentRole === "super_admin")) {
    wx.showToast({ title: "无权限访问", icon: "none" });
    return false;
  }
  return true;
}

module.exports = {
  login,
  getCurrentUser,
  getCurrentRole,
  switchRole,
  requireRole
};
