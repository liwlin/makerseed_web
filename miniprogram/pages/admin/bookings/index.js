const { requireRole } = require("../../../services/auth.service");
const { adminListBookings, updateBookingStatus } = require("../../../services/booking.service");

Page({
  data: {
    bookings: []
  },
  onShow() {
    if (!requireRole("admin")) return;
    this.refresh();
  },
  refresh() {
    adminListBookings().then((bookings) => this.setData({ bookings }));
  },
  setStatus(event) {
    updateBookingStatus(event.currentTarget.dataset.id, event.currentTarget.dataset.status)
      .then(() => {
        wx.showToast({ title: "状态已更新" });
        this.refresh();
      });
  }
});
