const { adminListBookings } = require("./booking.service");

async function adminDashboard() {
  const bookings = await adminListBookings();
  return {
    pendingBookings: bookings.filter((item) => item.status === "pending").length,
    totalBookings: bookings.length,
    todayLessons: 1,
    newStudents: 0
  };
}

module.exports = {
  adminDashboard
};
