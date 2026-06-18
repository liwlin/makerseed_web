const { requireRole } = require("../../../services/auth.service");
const { teacherListStudents } = require("../../../services/teacher.service");

Page({
  data: { students: [] },
  onLoad() {
    if (!requireRole("teacher")) return;
    teacherListStudents().then((students) => this.setData({ students }));
  }
});
