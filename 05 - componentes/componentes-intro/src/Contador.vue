<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
        <div>teste</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar() {
            this.contador++;
        },
        subtrair() {
            this.contador--;
        }
    }
}
</script>

<!-- 
        
    Scoped:

    - Mantém o escopo das estilizações para os elementos pertencentes a cada componente
    - Na utilização de um componente que utiliza outro componente, as estilizações do componente raiz terão prioridade apenas até a definição dos elementos raiz do "componente filho"

-->
<style scoped>
    div {
        border: 1px solid blue;
    }
    .contador {
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: purple;
        color: #fff;
        margin-left: 10px;
        outline: none;
        border: none;
    }
</style>