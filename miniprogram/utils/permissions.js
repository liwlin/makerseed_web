const ROLE_LABELS = {
  parent: "学员/家长",
  teacher: "教师",
  admin: "管理员",
  super_admin: "超级管理员"
};

const ROLE_HOME = {
  parent: "/pages/student/home/index",
  teacher: "/pages/teacher/home/index",
  admin: "/pages/admin/dashboard/index",
  super_admin: "/pages/admin/dashboard/index"
};

function normalizeRoles(user) {
  return user && Array.isArray(user.roles) && user.roles.length ? user.roles : ["parent"];
}

function hasRole(user, role) {
  return normalizeRoles(user).includes(role);
}

function canAccessPage(user, pageRole) {
  if (!pageRole) return true;
  if (pageRole === "admin") {
    return hasRole(user, "admin") || hasRole(user, "super_admin");
  }
  return hasRole(user, pageRole);
}

function getDefaultRole(user) {
  const roles = normalizeRoles(user);
  if (user && user.defaultRole && roles.includes(user.defaultRole)) {
    return user.defaultRole;
  }
  return roles[0];
}

function getRoleHome(role) {
  return ROLE_HOME[role] || ROLE_HOME.parent;
}

module.exports = {
  ROLE_LABELS,
  ROLE_HOME,
  normalizeRoles,
  hasRole,
  canAccessPage,
  getDefaultRole,
  getRoleHome
};
