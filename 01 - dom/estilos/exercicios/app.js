new Vue({
	el: '#desafio',
	data: {
		classeAlternada: '',
		classeInput: '',
		classes: '',
		estilo: {
			width: '50px',
			height: '30px',
		},
		corEstilo: '',
		perigo: false,
		estiloProgresso: {
			width: 0,
			height: '10px',
			backgroundColor: '#0A0D2D',
			transition: '.5s ease-in-out'
		}
	},
	methods: {
		iniciarEfeito() {
			this.classeAlternada = 'destaque'
			setInterval(() => {
				this.classeAlternada = this.classeAlternada == 'encolher' 
					? 'destaque' : 'encolher'
			}, 2000);
		},
		iniciarProgresso() {
			let largura = 0;
			const temporizador = setInterval(() => {
				largura += 5;
				this.estiloProgresso.width = `${largura}%`
				if(largura == 100) clearInterval(temporizador);
			}, 1000);
		},
		setPerigo(event) {
			const vl = event.target.value;

			if(vl === 'false') {
				this.perigo = false;
				return
			} else if(vl === 'true') {
				this.perigo = true;
			}
		},
	},

})
