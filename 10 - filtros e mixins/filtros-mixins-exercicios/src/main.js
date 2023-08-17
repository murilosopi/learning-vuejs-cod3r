import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', valor => valor.split('').reverse().join(''));
Vue.mixin({
	created() {
		console.log('Created - Global!');
	}
});
new Vue({
	render: h => h(App)
}).$mount('#app')
