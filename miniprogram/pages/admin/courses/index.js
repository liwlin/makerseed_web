const { requireRole } = require("../../../services/auth.service");
const { listCourses } = require("../../../services/course.service");

Page({
  data: { courses: [] },
  onLoad() {
    if (!requireRole("admin")) return;
    listCourses().then((courses) => this.setData({ courses }));
  }
});
