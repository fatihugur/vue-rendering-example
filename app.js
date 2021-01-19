const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
  },
});

app.mount("#assignment");
