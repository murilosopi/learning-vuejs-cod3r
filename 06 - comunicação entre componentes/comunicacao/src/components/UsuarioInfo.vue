<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="callbackFn">Alterar Nome (Callback)</button>
    </div>
</template>

<script>
export default {
    // propriedades aceitas que podem vir de um outro componente
    props: {
        // nomeUsuario: [String, Array]
        // nomeUsuario: String
        nomeUsuario: {
            type: String,
            required: true,
            // default: 'Anônimo'
        },
        callbackFn: Function
    },
    data() {

        return  {
            propNome: this.nomeUsuario
        }
    },
    methods: {
        reiniciarNome() {
            const novoNome = 'Pedro';
            this.$emit('nomeMudou', {
                antigo: this.nomeUsuario,
                novo: novoNome
            });
            

            
            /*
            this.propNome = 'Pedro';
            this.$emit('nomeMudou', this.propNome);
            */
            
            /*  Não é uma boa prática alterar uma propriedade diretamente do componente filho,
                já que o componente pai que irá alterá-lo na chamada do evento personalizado
            this.nomeUsuario = 'Pedro'
            this.$emit('nomeMudou', this.nomeUsuario);*/



        }
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
