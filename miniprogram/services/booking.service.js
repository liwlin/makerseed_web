const BOOKING_KEY = "makerseedBookings";

function nowText() {
  return new Date().toLocaleString();
}

function listMyBookings() {
  return Promise.resolve(wx.getStorageSync(BOOKING_KEY) || []);
}

function adminListBookings() {
  return listMyBookings();
}

function createBooking(input) {
  const booking = {
    _id: `booking_${Date.now()}`,
    status: "pending",
    source: "miniprogram",
    createdAt: nowText(),
    updatedAt: nowText(),
    ...input
  };
  const bookings = wx.getStorageSync(BOOKING_KEY) || [];
  bookings.unshift(booking);
  wx.setStorageSync(BOOKING_KEY, bookings);
  return Promise.resolve(booking);
}

function updateBookingStatus(id, status) {
  const bookings = wx.getStorageSync(BOOKING_KEY) || [];
  const next = bookings.map((booking) => (
    booking._id === id ? { ...booking, status, updatedAt: nowText() } : booking
  ));
  wx.setStorageSync(BOOKING_KEY, next);
  return Promise.resolve(next.find((booking) => booking._id === id));
}

module.exports = {
  listMyBookings,
  adminListBookings,
  createBooking,
  updateBookingStatus
};
