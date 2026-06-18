const { ROLE_LABELS } = require("../../utils/permissions");

Component({
  properties: {
    currentRole: { type: String, value: "parent" }
  },
  data: {
    roles: Object.keys(ROLE_LABELS).map((role) => ({ role, label: ROLE_LABELS[role] }))
  },
  methods: {
    selectRole(event) {
      this.triggerEvent("change", { role: event.currentTarget.dataset.role });
    }
  }
});
