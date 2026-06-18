module.exports = {
  collection: "courses",
  fields: {
    _id: "string",
    title: "string",
    category: "spring | summer | autumn | winter | regular",
    ageRange: "string",
    summary: "string",
    projects: "string[]",
    outcomes: "string[]",
    status: "draft | published | archived"
  }
};
