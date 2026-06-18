Component({
  properties: {
    status: {
      type: String,
      value: "pending",
      observer(value) {
        this.updateLabel(value);
      }
    }
  },
  data: {
    label: "待联系",
    labels: {
      pending: "待联系",
      contacted: "已联系",
      confirmed: "已确认",
      cancelled: "已取消"
    }
  },
  lifetimes: {
    attached() {
      this.updateLabel(this.data.status);
    }
  },
  methods: {
    updateLabel(status) {
      this.setData({ label: this.data.labels[status] || status });
    }
  }
});
