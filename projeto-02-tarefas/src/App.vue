<template>
	<div id="app">
		<h1>Tarefas</h1>
		<ProgressBar :progress="progress"></ProgressBar>
		<InputTask></InputTask>
		<PanelTask :tasks="tasks"></PanelTask>
	</div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import InputTask from "@/components/InputTask.vue";
import PanelTask from "@/components/PanelTask.vue";
import EventBus from "@/EventBus";

export default {
  components: {
    ProgressBar,
    PanelTask,
    InputTask,
  },
  data() {
    return {
      tasks: []
    };
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const totalDone = this.tasks.filter(value => value.done).length;

      return Math.round(totalDone * 100 / total) || 0;
    },
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        let value = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', value);
      }
    }
  },
  methods: {
    getLocalTasks() {
      let tasks = localStorage.getItem('tasks');
      return JSON.parse(tasks) || [];
    }
  },

  created() {
    this.tasks = this.getLocalTasks();

    EventBus.onToggleDoneState((idx) => {
      this.tasks[idx].done = !this.tasks[idx].done;
    });

    EventBus.onAddTask((newTask) => {
        this.tasks.push({
          text: newTask,
          done: false,
        });
    });

    EventBus.onRemoveTask(index => {
      this.tasks.splice(index, 1);
    }) 
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
