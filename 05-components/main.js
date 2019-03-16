Vue.component("blog-post", {
  template: `
    <div 
      :style="isDarkMode && 'color: white; background-color: black;'" 
      style="padding: 2rem; border: 1px solid black; margin: 1rem 0"
    >
      <button @click="isDarkMode = !isDarkMode">{{ isDarkMode ? 'Lighten' : 'Darken' }} this post!</button>
      <h4>{{ post.title }}</h4>
      <small>{{ post.read ? 'Read' : 'Unread' }}</small>
      <button @click="$emit('toggle', index)">Mark as {{ post.read ? 'Unread'  : 'Read' }}</button>
      <p>{{ post.content }}</h4>
    </div>
  `,
  props: ["post", "index"],
  data() {
    return {
      isDarkMode: false
    };
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
