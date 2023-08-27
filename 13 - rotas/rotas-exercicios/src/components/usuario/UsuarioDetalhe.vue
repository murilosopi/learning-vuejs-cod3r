<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p>
      Propriedade: <strong>{{ id }}</strong>
      <br>
      Parâmetro: <strong>{{ $route.params.id }}</strong>
    </p>
    <router-link tag="button" :to="`/usuario/${id}/editar`" primario>
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id
  //   }
  // },
}
</script>

<style>

</style>