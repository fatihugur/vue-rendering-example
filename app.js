const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: "",
      tasks: [],
      showTasks: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
    toogleTasksDisplay() {
      this.showTasks = !this.showTasks;
    },
  },
});

app.mount("#assignment");
