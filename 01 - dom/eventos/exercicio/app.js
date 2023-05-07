new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Voce clicou!!!')
        },
        alterarValor(e) {
            this.valor = e.target.value
        }
    }
})