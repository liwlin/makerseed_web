const { requireRole } = require("../../../services/auth.service");
const { listMyStudents } = require("../../../services/student.service");

Page({
  data: { students: [] },
  onShow() {
    if (!requireRole("admin")) return;
    listMyStudents().then((students) => this.setData({ students }));
  }
});
