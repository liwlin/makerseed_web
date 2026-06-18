function teacherTodaySchedule() {
  return Promise.resolve([
    {
      _id: "demo_lesson_1",
      time: "10:00",
      course: "机器人与自动控制",
      student: "小明",
      status: "confirmed"
    }
  ]);
}

function teacherListStudents() {
  return Promise.resolve([
    { _id: "student_demo_1", name: "小明", grade: "小学三年级", course: "机器人与自动控制" }
  ]);
}

module.exports = {
  teacherTodaySchedule,
  teacherListStudents
};
