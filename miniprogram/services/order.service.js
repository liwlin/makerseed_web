function listMyOrders() {
  return Promise.resolve([]);
}

function adminCreateOrder(order) {
  return Promise.resolve({ _id: `order_${Date.now()}`, status: "created", ...order });
}

module.exports = {
  listMyOrders,
  adminCreateOrder
};
