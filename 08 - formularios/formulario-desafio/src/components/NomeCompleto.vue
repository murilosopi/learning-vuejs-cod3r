<template>
  <div>
      <Rotulo nome="Nome Completo">
      <input type="text" placeholder="Nome" v-model="nome" id="nome" @keypress.space="alterarFoco"/>
      <input type="text" placeholder="Sobrenome" v-model="sobrenome" id="sobrenome"/>
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from './Rotulo.vue';
export default {
  components: {
    Rotulo
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      nome: this.value.nome || '',
      sobrenome: this.value.sobrenome || '',
    }
  },
  watch: {
    nome() {
      this.atualizarNomeCompleto();
    },
    sobrenome()  {
      this.atualizarNomeCompleto();
    }

  },
  methods: {
    atualizarNomeCompleto() {
      this.$emit('change', {
        nome: this.nome,
        sobrenome: this.sobrenome,
      });
    },
    alterarFoco(event) {
      event.preventDefault();
      document.querySelector('#sobrenome').focus();
    }
  }
}
</script>

<style>

</style>