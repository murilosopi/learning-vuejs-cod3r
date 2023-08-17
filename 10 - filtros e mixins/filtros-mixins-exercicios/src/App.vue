<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | filtroCpf | inverter }}</p>
		<input type="text" :value="cpf|filtroCpf">
	</div>
</template>

<script>
export default {
	filters: {
		filtroCpf(valor) {
			const regex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
			return valor.replace(regex, '$1.$2.$3-$4');
		}
	},
	data() {
		return {
			cpf: '54567384561',

		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
