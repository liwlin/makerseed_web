const { success } = require("../_template");

exports.main = async () => {
  return success({
    pendingBookings: 0,
    activeStudents: 0,
    activeTeachers: 0,
    monthlyRevenue: 0
  });
};
