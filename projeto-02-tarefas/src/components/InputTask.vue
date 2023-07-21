<template>
  <div class="input-task">
    <input type="text" placeholder="Insira sua tarefa" @keypress="e => { if(e.keyCode == 13) registerTask() }">
    <button @click="registerTask">
        <i class="fa-solid fa-thumbtack"></i>
    </button>
  </div>
</template>

<script>
import EventBus from '@/EventBus';
export default {
  methods: {
    registerTask() {
      const taskText = this.$el.querySelector('input').value;
      EventBus.registerTask(taskText);

      this.$el.querySelector('input').value = '';
    }
  }
}
</script>

<style>
  .input-task {
    margin-top: .5rem;
    display: flex;
  }

  .input-task :is(button, input) {
    border: none;
    outline: none;
    color: white;
  }

  .input-task button {
    border-radius: 0 1rem 1rem 0;
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .input-task input {
    padding: .3rem 1rem;
    width: 275px;
    height: 20px;
    border-radius: 1rem 0 0 1rem;
    background: rgba(0, 0, 0, 0.207);
  }
</style>