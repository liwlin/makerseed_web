module.exports = {
  collection: "orders",
  fields: {
    _id: "string",
    userId: "string",
    courseId: "string",
    amount: "number",
    status: "unpaid | paid | refunded | closed",
    createdAt: "date"
  }
};
