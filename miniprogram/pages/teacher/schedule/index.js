const { requireRole } = require("../../../services/auth.service");
const { teacherTodaySchedule } = require("../../../services/teacher.service");

Page({
  data: { lessons: [] },
  onLoad() {
    if (!requireRole("teacher")) return;
    teacherTodaySchedule().then((lessons) => this.setData({ lessons }));
  }
});
