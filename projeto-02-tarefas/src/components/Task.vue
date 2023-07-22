<template>
  <article class="task" :class="{done: task.done}" @click="() => {if(task.done) $emit('done', task.id)}">
    <slot name="text"></slot>
  </article>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  .task {
    display: block;
    padding: .5rem 1rem;
    border-radius: 1rem;
    background-color: rgb(91, 125, 187);
    border-left: 10px solid rgb(66, 95, 132);
    transition: .5s ease-out;
  }
  
  .task.done {
    background-color: rgb(91, 187, 126);
    border-left: 10px solid rgb(66, 132, 103);
    text-decoration: line-through;
  }
</style>