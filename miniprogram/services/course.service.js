const { courseFamilies } = require("../utils/app-data");

function listCourses() {
  return Promise.resolve(courseFamilies);
}

function getCourseDetail(id) {
  return Promise.resolve(courseFamilies.find((course) => course.id === id));
}

module.exports = {
  listCourses,
  getCourseDetail
};
