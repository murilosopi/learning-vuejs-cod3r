<template>
  <div class="usuario-editar">
    <h3>Usuario Editar</h3>
    <p><strong>Código: {{ id }}</strong></p>
    <p>Idioma/Região: <strong>{{ $route.query.idioma }}/{{ $route.query.pais }}</strong></p>
  </div>
</template>

<script>
export default {
  props:['id']
}
</script>

<style>

</style>