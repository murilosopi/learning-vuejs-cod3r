<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome }}</strong></p>
        <p><strong>Idade:</strong> {{ propIdade }}</p>
        <hr>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="callbackFn">Alterar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

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
        callbackFn: Function,
        idade: Number
    },
    data() {

        return  {
            propNome: this.nomeUsuario,
            propIdade: this.idade
        }
    },
    methods: {
        reiniciarNome() {
            const novoNome = 'Pedro';
            this.$emit('nomeMudou', {
                antigo: this.nomeUsuario,
                novo: novoNome
            });
        }
    },
    computed: {
        inverterNome() {
            return this.nomeUsuario.split('').reverse().join('')
        }
    },

    // event bus => comunicação entre irmãos sem passar pelo componente pai 
    created() {
        barramento.$on('idadeMudou', idade => {
            this.propIdade = idade;
        });
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
