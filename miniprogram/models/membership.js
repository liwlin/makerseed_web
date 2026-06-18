module.exports = {
  collection: "memberships",
  fields: {
    _id: "string",
    userId: "string",
    level: "seed | maker | inventor",
    points: "number",
    benefits: "string[]",
    expiresAt: "date"
  }
};
