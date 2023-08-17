<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<input type="text" v-quando:enter="funcao">
		<button v-quando:clicar="funcao">Clique aqui</button>
	</div>
</template>

<script>
export default {
	directives: {
		quando: {
			bind(el, binding, vnode) {
				switch(binding.arg) {
					case 'clicar':
						el.addEventListener('click', event => binding.value(event))
						break;

					case 'enter':
						el.addEventListener('keypress', event => {
							if(event.key == 'Enter') binding.value(event);
						})
						break;
				}
			}
		}
	},
	methods: {
		funcao(e) {
			alert('evento')
			console.log(e);
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

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
