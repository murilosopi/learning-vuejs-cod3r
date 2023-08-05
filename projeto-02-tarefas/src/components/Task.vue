<template>
    <article @click="toggleDoneState(idx)" class="task" :class="{done: task.done}">
      <slot name="text"></slot>
      <button class="close" @click.stop="removeTask(idx)">
        <i class="fa-solid fa-x"></i>
      </button>
    </article>
</template>

<script>
import EventBus from '../EventBus';
export default {
  props: {
    task: {
      type: Object,
      required: true
    },
    idx: Number
  },
  methods: {
    toggleDoneState(idx) {
      EventBus.$emit('toggleDoneState', idx);
    },
    removeTask(idx) {
      EventBus.$emit('removeTask', idx);
    }
  }
}
</script>

<style>
  .task {
    display: block;
    padding: .5rem 3rem;
    border-radius: 1rem;
    background-color: rgb(91, 125, 187);
    border-left: 10px solid rgb(66, 95, 132);
    transition: .5s ease-out;
    position: relative;
  }
  
  .task.done {
    background-color: rgb(91, 187, 126);
    border-left: 10px solid rgb(66, 132, 103);
    text-decoration: line-through;
  }

  .task .close {
    background: rgba(0, 0, 0, 0.241);
    border: none;
    border-radius: 50%;
    font-size: .5rem;
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: white;
    position: absolute;
    top: .5rem;
    right: .5rem;
    opacity: 0.7;
    transition: .2s;
  }

  .task:hover .close {
    opacity: 1;
  }
</style>