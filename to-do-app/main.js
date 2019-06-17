Vue.component("todo-input", {
  template: `
    <input
      v-model="nextTodo"
      class="input"
      @keyup.enter="emitAddTodo"
      placeholder="Type your task here"
    />
  `,
  data() {
    return {
      nextTodo: ""
    };
  },
  methods: {
    emitAddTodo() {
      if (this.nextTodo) {
        this.$emit("addtodo", this.nextTodo);
        this.nextTodo = "";
      }
    }
  }
});

Vue.component("todo-item", {
  template: `
    <li class="todo-item-container">
      <input type="checkbox" @change="$emit('toggle', todo)" :checked="todo.done"/>
      <div class="todo-item" >
        <span
          v-if="!isEditing"
          @click="isEditing = true"
          class="todo-name"
          :class="{'todo-name--done': todo.done}"
        >
        {{ todo.name }}
        </span>
        <input
          v-else
          class="todo-edit"
          type="text"
          v-model="editedTodo"
          @keyup.enter="edit"
          @keyup.esc="isEditing = false"
        />
        <svg
          @click="$emit('delete', index)"
          v-if="!isEditing"
          class="delete-icon"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
        </svg>
      </div>
    </li>
  `,
  props: ["todo", "index"],
  data() {
    return {
      isEditing: false,
      editedTodo: this.todo.name
    };
  },
  methods: {
    edit() {
      this.$emit("edit", this.editedTodo, this.index);
      this.isEditing = false;
    }
  }
});

Vue.component("filters", {
  template: `
    <ul class="list">
      <li
        :key="filter"
        v-for="filter in filters"
        @click="$emit('changeCurrentFilter', filter)"
        class="filter"
        :class="{'filter--active': currentFilter === filter}"
      >{{ filter }}</li>
    </ul>
  `,
  props: {
    currentFilter: String
  },
  data() {
    return {
      filters: ["all", "active", "done"]
    };
  }
});

new Vue({
  el: "#app",
  data: {
    todos: [],
    currentFilter: "all"
  },
  mounted() {
    const localTodos = localStorage.getItem("vue-todos");
    if (localTodos) {
      this.todos = JSON.parse(localTodos);
    }
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem("vue-todos", JSON.stringify(this.todos));
      },
      deep: true
    }
  },
  computed: {
    filteredTodos() {
      switch (this.currentFilter) {
        case "all":
          return this.todos;
        case "active":
          return this.todos.filter(todo => !todo.done);
        case "done":
          return this.todos.filter(todo => todo.done);
        default:
          return this.todos;
      }
    }
  },
  methods: {
    addTodo(nextTodo) {
      this.todos = [{ name: nextTodo, done: false }, ...this.todos];
    },
    toggle(todo) {
      todo.done = !todo.done;
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
    },
    editItem(name, index) {
      this.todos[index].name = name;
    },
    changeCurrentFilter(filter) {
      this.currentFilter = filter;
    }
  }
});
