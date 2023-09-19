import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: []
  },
  getters: {
    // método getter centralizado
    valorTotal(state) {
      return state.produtos.map(p => p.quantidade * p.preco)
      .reduce((total, atual) => total + atual, 0);
    }
  },
  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload);
    }
  },

  // aplicação de regras
  actions: {
    adicionarProduto({ commit }, payload) {
      setTimeout(() => {
        commit('adicionarProduto', payload);
      }, 1000) 
    }
  }
});