<template>
  <div id="chat-input">
    <form>
      <input placeholder="Say something" type="text" />
      <button type="submit" @click="e => e.preventDefault()">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return { socket: null };
  },
  methods: {
    sendName: function() {
      this.socket.send(this.$store.getters.username);
      this.sendText();
    },
    sendText: function() {
      this.socket.send("HELLOOOO");
    },
    initSocket: function() {
      this.socket.onopen = () => {
        console.log("Socket opened");
        this.sendName();
      };
      this.socket.onclose = () => {
        console.log("Socket closed");
      };
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
