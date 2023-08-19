<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ exercicio1 | espacoPorVirgula }}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<p>{{ exercicio2 | letrasPorPalavras }}</p>

		<hr>
		<h2>Computed</h2>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p> {{ ex1 }} </p>
		<p> {{ ex2 }} </p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import computedMixin from './ComputedMixin';
export default {
	mixins:[computedMixin],
  filters: {
    espacoPorVirgula(str) {
      return `${str}`.replaceAll(" ", ",");
    },
  },
  data() {
    return {
      exercicio1: "Construir um filtro local que troca espaços por vírgula",
      exercicio2:
        "Filtro global que conta o tamanho de cada palavra e adiciona o valor na string final",
    };
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
</style>
