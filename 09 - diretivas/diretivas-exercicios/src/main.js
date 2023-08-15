import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive('destaque', {

	// quando é associada ao elemento
	bind(el, binding, vnode) {
		let atraso = 0;

		if(binding.modifiers['atrasar']) atraso = 1000;

		setTimeout(() => {
			if(binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
	
			if(binding.modifiers['asterisco']) el.textContent = `** ${el.textContent} **`
		}, atraso) 
	}
});

new Vue({
	render: h => h(App),
}).$mount('#app')
