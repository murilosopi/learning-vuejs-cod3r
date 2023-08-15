<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando a diretiva <strong>v-html</strong>'"></p>

		<hr>

		<!-- <p v-nomeDiretiva:argumento.modificador1.modificador2="'valor'"></p> -->

		<!-- global -->
		<p v-destaque:fundo="cor">O fundo deste texto estará em destaque</p>
		<p v-destaque:fundo.atrasar.asterisco="'violet'">O fundo deste texto estará em destaque</p>
		<p v-destaque="cor">Este texto estará em destaque</p>

		<hr>

		<!-- local -->
		<p v-l-destaque:fundo.alternar="{cor: 'lightblue', corSecundaria: 'lightyellow', intervalo: 250, atraso: 2000}">Diretiva local</p>
		<p v-l-destaque:fundo.atrasar="{cor: 'violet', atraso: 5000}">O fundo deste texto estará em destaque</p>


	</div>
</template>

<script>
export default {
  data() {
    return {
      cor: "lightblue",
    };
  },
  directives: {
    "l-destaque": {
      // quando é associada ao elemento
      bind(el, binding, vnode) {
				
				const aplicarCor = (cor) => {
					if (binding.arg === "fundo") {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        };
				
        const corPrincipal = binding.value.cor,
							corSecundaria = binding.value.corSecundaria;
							
				let corAtual;

				let atraso = binding.modifiers['atrasar'] ? binding.value.atraso : 0;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual == corSecundaria ? binding.value.cor : corSecundaria;

              aplicarCor(corAtual);
            }, binding.value.intervalo);
          } else {
            aplicarCor(corPrincipal);
          }
        }, atraso);
      },
    },
  },
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
</style>
