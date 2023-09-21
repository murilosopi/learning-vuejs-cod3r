<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    data() {
        return {
            sequencia: 1,
            quantidade: 0,
            preco: 0
        }
    },
    methods: {
        ...mapActions(['adicionarProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // this.$store.state.produtos.push(produto);
            // this.$store.dispatch('adicionarProduto', produto);
            this.adicionarProduto(produto);

            this.resetarPadrao();
        },
        resetarPadrao() {
            this.quantidade = this.quantidadePadrao
            this.preco = this.precoPadrao
        }
    },
    created() {
        this.resetarPadrao();
    },
    computed: {
        quantidadePadrao() {
            return this.$store.state.parametros.quantidade;
        },

        precoPadrao() {
            return this.$store.state.parametros.preco;
        }
    },
    watch: {
        quantidadePadrao(valor) {
            this.quantidade = valor;
        },

        precoPadrao(valor) {
            this.preco = valor;
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
