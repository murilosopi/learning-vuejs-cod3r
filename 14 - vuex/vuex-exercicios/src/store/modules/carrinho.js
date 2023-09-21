export default {
  namespaced: true,
  state: {
    produtos: [],
    quantidade: 0,
    preco: 0
  },
  getters: {
    // método getter centralizado
    valorTotal(state, getters, rootState) {
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
    // adicionarProduto({ commit, state, rootState }, payload) {
    //   setTimeout(() => {
    //     commit('adicionarProduto', payload);
    //   }, 1000) 
    // }

    adicionarProduto: {
      root: true,
      handler({ commit, state, rootState }, payload) {
        setTimeout(() => {
          commit('adicionarProduto', payload);
        }, 1000) 
      }
    }
  }
}