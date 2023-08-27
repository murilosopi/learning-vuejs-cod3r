<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      // this.$router.push('/');
      this.$router.push({
        path: '/'
      });
    }
  }
}
</script>

<style>

</style>