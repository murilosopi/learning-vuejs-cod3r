import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('letrasPorPalavras', function(frase) {
	let novaFrase = `${frase}`
	.replace(/[ ]+/, " ")
	.split(" ")
	.map(p => `${p} (${p.length})`)
	.join(' ');

	return novaFrase.trim();
})
new Vue({
	render: h => h(App),
}).$mount('#app')
