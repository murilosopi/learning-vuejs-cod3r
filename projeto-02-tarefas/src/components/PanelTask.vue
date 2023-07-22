<template>
  <div class="panel-task">
    <Task v-for="task in tasks" :key="task.id" :task="task" @done="markAsDone">
        <p slot="text">{{ task.text }}</p>
    </Task>
  </div>
</template>

<script>
import Task from '@/components/Task.vue';
import EventBus from '@/EventBus';
export default {
  components: {
      Task
  },
  watch: {
    tasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.changeProgress()
    }
  },
	data() {
		return {
			tasks: []
		}
	},
  methods: {
    markAsDone(id) {
      let [res] = this.tasks.filter(task => task.id == id);
      res.done = true;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.changeProgress()

    },

    changeProgress() {
      const doneTasks = this.tasks.filter(task => task.done);

      EventBus.$emit('onChangeProgress', {
        total: this.tasks.length,
        done: doneTasks.length
      })
    }
  },
  beforeMount() {
    const localTasks = JSON.parse(localStorage.getItem('tasks'));
    this.tasks = localTasks ? localTasks : [];
    this.changeProgress()
  },
  created() {
    EventBus.onAddTask((newTask) => {
      this.tasks.push({
        text: newTask,
        id: this.tasks.length+1,
        done: false
      });

    });
  }
}
</script>

<style>
  .panel-task {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-content: center;
    gap: .75rem ;
  }
</style>