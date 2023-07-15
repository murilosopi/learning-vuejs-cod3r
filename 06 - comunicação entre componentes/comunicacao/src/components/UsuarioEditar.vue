<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p><strong>Idade:</strong> {{ idade }}</p>

        <!-- <input type="number" v-model="idadeEditavel"> -->
        <input type="number" v-model="idadeEditavel">
        <button @click="zerarIdade">Zerar Idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        idade: Number
    },

    data() {
        return {
            idadeEditavel: this.idade
        }
    },

    methods: {
        zerarIdade() {
            this.idadeEditavel = 0;
        }
    },

    watch: {
        idadeEditavel() {
            barramento.$emit('idadeMudou', Number(this.idadeEditavel))
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
