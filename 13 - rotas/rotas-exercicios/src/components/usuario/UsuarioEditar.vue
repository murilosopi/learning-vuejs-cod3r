<template>
  <div class="usuario-editar">
    <h3>Usuario Editar</h3>
    <p><strong>Código: {{ id }}</strong></p>
    <p>Idioma/Região: <strong>{{ $route.query.idioma }}/{{ $route.query.pais }}</strong></p>

    <footer id="rodape">
      <h3>Curso Vue</h3>
    </footer>
  </div>
</template>

<script>
export default {
  props:['id'],
  data() {
    return {
      confirmou: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if(this.confirmou) {
      next();
    } else if(confirm('Tem certeza')) {
      next();
    } else {
      next(false);
    }
  }
}
</script>

<style>
  footer#rodape h3 {
    margin-top: 1000px;
  }
</style>