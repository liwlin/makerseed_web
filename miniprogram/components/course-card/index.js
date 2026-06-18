Component({
  properties: {
    course: { type: Object, value: {} },
    actionText: { type: String, value: "查看" }
  },
  methods: {
    tapAction() {
      this.triggerEvent("action", { course: this.data.course });
    }
  }
});
