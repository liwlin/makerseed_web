Component({
  properties: {
    student: { type: Object, value: {} }
  },
  observers: {
    student(student) {
      const name = student && student.name ? student.name : "?";
      this.setData({ initial: name.slice(0, 1) });
    }
  },
  data: {
    initial: "?"
  }
});
