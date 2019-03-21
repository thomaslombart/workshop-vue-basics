Vue.component("blog-post", {
  template: `
    <div class="post" :class="{'post-dark': isDarkMode}">
      <button
        class="btn btn-post"
        :class="{'btn-post-dark': isDarkMode}"
        @click="isDarkMode = !isDarkMode"
      >
        {{ isDarkMode ? 'Lighten' : 'Darken' }} this post!
      </button>
      <h4 class="title title-post">{{ post.title }}</h4>
      <p class="text-small">{{ post.content.split(" ").length }} words</p>
      <small class="text-small">{{ post.read ? 'Read' : 'Unread' }}</small>
      <button class="btn btn-small" @click="sendToggleEvent">
        Mark as {{ post.read ? 'Unread'  : 'Read' }}
      </button>
      <p class="text text-post">{{ post.content }}</h4>
    </div>
  `,
  props: ["post", "index"],
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    sendToggleEvent() {
      this.$emit("toggle", this.index, "hey");
    }
  }
});

new Vue({
  el: "#app",
  data: {
    posts: [
      {
        title: "My first post",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet lorem tortor, non semper ante porta sit amet. Nulla blandit iaculis lobortis. Vestibulum id suscipit mauris. Vestibulum id nibh sit amet eros hendrerit volutpat at at felis. Mauris interdum eget neque at fringilla. Duis luctus maximus risus non viverra.",
        read: false
      },
      {
        title: "Vue is awesome!",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet lorem tortor, non semper ante porta sit amet. Nulla blandit iaculis lobortis. Vestibulum id suscipit mauris. Vestibulum id nibh sit amet eros hendrerit volutpat at at felis. Mauris interdum eget neque at fringilla. Duis luctus maximus risus non viverra.",
        read: false
      }
    ]
  },
  methods: {
    toggleRead(index) {
      this.posts[index].read = !this.posts[index].read;
    }
  }
});
