<template>
  <div id="chat-input">
    <form v-on:submit.prevent="sendText">
      <input placeholder="Say something" type="text" v-model="message" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return { socket: null, message: "" };
  },
  methods: {
    sendName: function() {
      this.socket.send(this.$store.getters.username);
    },
    sendText: function() {
      if (this.message !== "") {
        this.socket.send(this.message);
      }
      this.message = "";
    },
    initSocket: function() {
      this.socket.onopen = () => {
        console.log("Socket opened");
        this.sendName();
      };
      this.socket.onclose = () => {
        console.log("Socket closed");
      };
      this.socket.addEventListener("message", event => {
        const [u, m] = event.data.split("--->");
        this.$store.dispatch("addMessage", { username: u, text: m });
      });
    }
  },
  beforeMount() {
    this.socket = new WebSocket("ws://localhost:3001/");
    this.initSocket();
  }
};
</script>

<style>
#chat-input {
  width: 100%;
}
#chat-input form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
}
#chat-input form input {
  font-size: 1rem;
  padding: 1rem 2rem;
  width: 95%;
  outline: none;
  border: #eee 0.1px solid;
}
#chat-input form button {
  cursor: pointer;
  box-sizing: border-box;
  font-size: 1rem;
  background-color: white;
  color: #004d40;
  padding: 1rem 2rem;
  border: 0;
  margin: 0;
  border: #eee 0.1px solid;
  border-left: 0px;
}
</style>
