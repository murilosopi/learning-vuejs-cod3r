new Vue({
    el: '#desafio',
    data: {
        nome: 'Murilo Sopi',
        idade: 18,
        imgPath: 'https://cataas.com/cat/says/hello%20world!'
    },
    methods: {
        gerarNumAleatorio() {
            return Math.random()
        }
    }
});