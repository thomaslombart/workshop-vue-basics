Vue.component("blog-post", {
  template: `
    <div 
      class="p-6 border rounded mt-6"
      :class="isDarkMode ? 'bg-black text-grey-lighter' : 'bg-grey-lightest'"
    >
      <button
        class="font-bold py-2 px-4 rounded focus:outline-none mb-4"
        :class="isDarkMode ? 'text-grey-darkest bg-grey-lightest hover:bg-white' : 'bg-grey-darkest hover:bg-black text-white'"
        @click="isDarkMode = !isDarkMode"
      >
        {{ darkModeText }} this post!
      </button>
      <h4 class="text-2xl">{{ post.title }}</h4>
      <p class="text-sm">{{ numberOfWords }} words</p>
      <small class="mt-3 text-bold text-base inline-block">{{ readText }}</small>
      <button 
        class="bg-blue ml-1 hover:bg-blue-dark text-white font-bold p-1 rounded focus:outline-none"
        @click="$emit('toggle', index)"
      >
        Mark as {{ reversedReadText }}
      </button>
      <p class="mt-3 leading-normal">{{ post.content }}</h4>
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
