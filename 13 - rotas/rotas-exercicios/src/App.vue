<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view name="menu"/>
		<transition 
			enter-active-class="animated rubberBand"
			leave-active-class="animatede rollOut"
			mode="out-in"
		>
			<router-view />
		</transition>
		<router-view name="menuInferior"/>
	</div>
</template>

<script>
export default {
	components: {}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
