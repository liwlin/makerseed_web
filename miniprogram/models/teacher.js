module.exports = {
  collection: "teachers",
  fields: {
    _id: "string",
    userId: "string",
    name: "string",
    title: "string",
    specialties: "string[]",
    campusId: "string",
    status: "active | inactive"
  }
};
