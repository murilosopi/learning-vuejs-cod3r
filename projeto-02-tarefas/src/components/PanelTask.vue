<template>
  <div class="panel-task">
	<template v-if="tasks.length">
		<Task v-for="(task, index) in tasks" :key="index" :task="task" :idx="index">
			<p slot="text">{{ task.text }}</p>
		</Task>
	</template>
	<template v-else>
		<p>Sem tarefas pendentes! :D</p>
	</template>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
// import EventBus from "@/EventBus";
export default {
  components: {
    Task,
  },

  props: {
    tasks: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.panel-task {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;
  gap: 0.75rem;
}
</style>
