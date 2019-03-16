Vue.component("blog-post", {
  template: `
    <div 
      :style="isDarkMode && 'color: white; background-color: black;'" 
      style="padding: 2rem; border: 1px solid black; margin: 1rem 0"
    >
      <button @click="isDarkMode = !isDarkMode">{{ darkModeText }} this post!</button>
      <h4>{{ post.title }}</h4>
      <p>{{ numberOfWords }} words</p>
      <small>{{ readText }}</small>
      <button @click="$emit('toggle', index)">Mark as {{ reversedReadText }}</button>
      <p>{{ post.content }}</h4>
    </div>
  `,
  props: ["post", "index"],
  data() {
    return {
      isDarkMode: false
    };
  },
  computed: {
    numberOfWords: function() {
      return this.post.content.split(" ").length;
    },
    darkModeText: function() {
      return this.isDarkMode ? "Lighten" : "Darken";
    },
    readText: function() {
      return this.post.read ? "Read" : "Unread";
    },
    reversedReadText: function() {
      return this.post.read ? "Unread" : "Read";
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
        title: "A second post",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet lorem tortor, non semper ante porta sit amet. Nulla blandit iaculis lobortis. Vestibulum id suscipit mauris. Vestibulum id nibh sit amet eros hendrerit volutpat at at felis. Mauris interdum eget neque at fringilla. Duis luctus maximus risus non viverra.",
        read: false
      },
      {
        title: "Vue is awesome",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet lorem tortor, non semper ante porta sit amet. Nulla blandit iaculis lobortis. Vestibulum id suscipit mauris. Vestibulum id nibh sit amet eros hendrerit volutpat at at felis. Mauris interdum eget neque at fringilla. Duis luctus maximus risus non viverra.",
        read: true
      }
    ]
  },
  methods: {
    toggleRead(index) {
      this.posts[index].read = !this.posts[index].read;
    }
  }
});
