import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mostrarAppBar: true,
  },
  mutations: {
    setMostrarAppBar(state, mostrar) {
      state.mostrarAppBar = mostrar;
    },
  },
  actions: {},
  modules: {},
});
