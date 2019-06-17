new Vue({
  el: "#app",
  data: {
    name: "",
    hasEnteredName: false
  },
  methods: {
    checkName() {
      if (this.name !== "" && this.name.length >= 2) {
        this.hasEnteredName = true;
      }
    }
  }
});
