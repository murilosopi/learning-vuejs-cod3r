<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome }}</strong></p>
    </div>
</template>

<script>
export default {
    // propriedades aceitas que podem vir de um outro componente
    props: ['nomeUsuario'],
    methods: {
        
    },
    computed: {
        inverterNome() {
            return this.nomeUsuario.split('').reverse().join('')
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
