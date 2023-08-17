<template>
  <div>
    <ul>
      <li v-for="(fruta, idx) in frutas" :key="idx">
        {{ fruta }}
      </li>
    </ul>
    <input type="text" v-model="fruta" @keypress.enter="add">
  </div>
</template>

<script>
import frutasMixin from './FrutasMixin';
export default {
  mixins: [frutasMixin],
}
</script>

<style></style>