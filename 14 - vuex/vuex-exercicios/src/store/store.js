import Vue from "vue";
import Vuex from 'vuex';

import carrinho from "./modules/carrinho";
import parametros from "./modules/parametros";

import * as getters from './getters';

Vue.use(Vuex);


// com "modules" o acesso de state será this.$store.state.< nome do modulo >.< propriedade >
// já as mutations, actions e getters ficam diretamente em this.$store
export default new Vuex.Store({
  state: {
    nome: 'Murilo',
    sobrenome: 'Sopi'
  },
  getters,
  modules: { carrinho, parametros }
});