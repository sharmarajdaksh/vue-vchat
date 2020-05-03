import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface Message {
  username: string;
  text: string;
}

export default new Vuex.Store({
  state: {
    username: "Dexs",
    messages: Array<Message>()
  },
  mutations: {
    updateUsername: (state, payload) => (state.username = payload),
    addMessage: (state, payload) => state.messages.push(payload)
  },
  actions: {
    updateUsername: (context, payload) => {
      context.commit("updateUsername", payload);
    },
    addMessage: (context, payload) => {
      context.commit("addMessage", payload);
    }
  },
  getters: {
    username: state => state.username,
    messages: state => state.messages
  }
});
