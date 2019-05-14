new Vue({
  el: "#app",
  data: {
    counter: 0
  },
  watch: {
    counter(value) {
      console.log(`The count has changed, it's now ${value}`);
    }
  }
});
