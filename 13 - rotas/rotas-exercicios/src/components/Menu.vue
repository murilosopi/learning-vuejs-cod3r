<template>
  <nav class="menu">
    <ul>
      <router-link tag="li" to="/" active-class="active" exact><a>Início</a></router-link>
      <router-link tag="li" to="/usuario/1" active-class="active"><a>Usuários 1</a></router-link>
      <router-link tag="li" to="/usuario/2" active-class="active"><a>Usuários 2</a></router-link>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>