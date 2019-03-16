new Vue({
  el: "#app",
  data: {
    admin: false
  },
  methods: {
    makeMeAdmin() {
      this.admin = true;
    }
  }
});
