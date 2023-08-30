<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p>Propriedade: <strong>{{ id }}</strong></p>
    <p>Parâmetro: <strong>{{ $route.params.id }}</strong></p>

    <router-link tag="button" :to="{name: 'editarUsuario', params: {id}, 
                                    query: {idioma: 'pt', pais: 'br'},
                                    hash: '#rodape'}" primario>
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
  beforeRouteEnter(to, from, next) {
    console.log('dentro do compoennte');
    next(vm => {
      console.log(vm.id)
    });
  }
}
</script>

<style>

</style>