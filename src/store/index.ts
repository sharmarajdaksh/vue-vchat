import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "Dexs"
  },
  mutations: {
    updateUsername: (state, payload) => (state.username = payload)
  },
  actions: {
    updateUsername: (context, payload) => {
      context.commit("updateUsername", payload);
    }
  },
  getters: {
    username: state => state.username
  }
});
