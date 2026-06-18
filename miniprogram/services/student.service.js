const STUDENT_KEY = "makerseedStudents";

function listMyStudents() {
  return Promise.resolve(wx.getStorageSync(STUDENT_KEY) || []);
}

function createStudent(input) {
  const student = {
    _id: `student_${Date.now()}`,
    status: "active",
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
    ...input
  };
  const students = wx.getStorageSync(STUDENT_KEY) || [];
  students.unshift(student);
  wx.setStorageSync(STUDENT_KEY, students);
  return Promise.resolve(student);
}

module.exports = {
  listMyStudents,
  createStudent
};
