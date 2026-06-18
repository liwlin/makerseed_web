const { media, honors, schools, faculty } = require("../../../utils/app-data");

Page({
  data: {
    active: "strength",
    media,
    honors,
    schools,
    faculty
  },
  showStrength() {
    this.setData({ active: "strength" });
  },
  showFaculty() {
    this.setData({ active: "faculty" });
  }
});
