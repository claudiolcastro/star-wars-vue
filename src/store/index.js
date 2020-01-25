import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: null,
    page: 1,
  },

  mutations: {
    SET_CHARACTERS(state, payload) {
      state.characters = payload;
    },

    SET_PAGE(state, payload) {
      state.page = payload;
    },
  },

  actions: {
    setCharacters({ commit }, payload) {
      commit('SET_CHARACTERS', payload);
    },

    setPage({ commit }, payload) {
      commit('SET_PAGE', payload);
    },
  },
});
