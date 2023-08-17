<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | filtroCpf | inverter }}</p>
		<input type="text" :value="cpf|filtroCpf">
		<hr>
		<Frutas />

		<div>
    <ul>
      <li v-for="(fruta, idx) in frutas" :key="idx">
        {{ fruta }}
      </li>
    </ul>
    <input type="text" v-model="fruta" @keypress.enter="add">
  </div>
	</div>
</template>

<script>
import frutasMixin from './FrutasMixin';
import usuarioMixin from './UsuarioMixin';
import Frutas from "./Frutas.vue";
export default {
	mixins: [frutasMixin, usuarioMixin],
  components: {
    Frutas,
  },
  filters: {
    filtroCpf(valor) {
      const regex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
      return valor.replace(regex, "$1.$2.$3-$4");
    },
  },
  data() {
    return {
      cpf: "54567384561",
			fruta: 'o componente tem prioridade ao mixin'
    };
  },
	created() {
		console.log('Created - App')
	}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
