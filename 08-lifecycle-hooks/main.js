Vue.component("counter", {
  template: `
    <div>
      <h2 class="title">First counter</h2>
      <button class="btn btn-small" @click="count++">+1</button>
      <p>{{ count }}</p>
    </div>`,
  data() {
    return {
      count: 0
    };
  },
  beforeCreate() {
    console.log(
      "beforeCreate:",
      "data is not reactive, events have not been set up"
    );
  },
  created() {
    console.log(
      "created:",
      "data and events work properly. Nothing have been rendered though..."
    );
  },
  beforeMount() {
    console.log("beforeMount:", "template have been compiled");
  },
  mounted() {
    console.log(
      "mounted:",
      "reactivity? Set up. Template? Compiled and rendered. You can do whatever you need to do with your component or app!"
    );
  },
  beforeUpdate() {
    console.log(
      "beforeUpdate:",
      "looks like something in my data changed. I'm about to patch the DOM and re-render it..."
    );
  },
  updated() {
    console.log(
      "updated:",
      "DOM patched! If you need to do something with the DOM after the change, now would be a good time."
    );
  },
  beforeDestroy() {
    console.log(
      "beforeDestroy:",
      "will destroy this component in a few moments. If you need to cleanup some subscriptions, please do it."
    );
  },
  destroyed() {
    console.log("destroyed:", "component destroyed");
  }
});

Vue.component("local-storage-counter", {
  template: `
    <div>
      <h2 class="title">Local storage counter</h2>
      <button class="btn btn-small" @click="count++">+1</button>
      <p>{{ count }}</p>
    </div>
  `,
  data() {
    return {
      count: 0
    };
  },
  watch: {
    count(value) {
      window.localStorage.setItem("count", JSON.stringify(value));
    }
  },
  created() {
    const potentialCount = window.localStorage.getItem("count");
    if (potentialCount) {
      this.count = JSON.parse(potentialCount);
    }
  }
});

new Vue({
  el: "#app",
  data: {
    mustDestroy: false
  }
});
