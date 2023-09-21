<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    // getters via this.$store

    // computed: {
    //     total() {
    //         return this.$store.getters.valorTotal;
    //     }
    // }

    // getters via mapGetter com array
    // computed: mapGetters(['valorTotal'])

    // getters via mapGetter com objeto
    computed: mapGetters('carrinho', {
        total: 'valorTotal'
    })
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
