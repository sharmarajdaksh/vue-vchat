<template>
  <div id="app">
    <div id="aside">
      <app-aside></app-aside>
    </div>
    <div id="chat-area">
      <app-chat></app-chat>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Aside from "./components/Aside";
import Chat from "./components/Chat";

export default {
  components: {
    "app-aside": Aside,
    "app-chat": Chat
  },
  methods: {
    ...mapActions(["updateUsername"])
  },
  computed: {
    value: {
      get() {
        return this.$store.getters.username;
      },
      set(username) {
        this.$store.dispatch("updateUsername", username);
      }
    }
  },
  beforeCreate: function() {
    const u = prompt("Your username", "Anon");
    this.$store.dispatch("updateUsername", u);
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 21px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  width: 100vw;
  grid-template-columns: 20% 80%;
  padding: 0;
}
</style>
