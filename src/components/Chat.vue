<template>
  <div id="chat">
    <div id="chat-display-area">
      <app-chat-display></app-chat-display>
    </div>
    <div id="chat-form">
      <app-chat-input></app-chat-input>
    </div>
  </div>
</template>

<script>
import ChatInput from "./ChatInput.vue";
import ChatDisplay from "./ChatDisplay.vue";
export default {
  components: {
    "app-chat-input": ChatInput,
    "app-chat-display": ChatDisplay
  }
};
</script>

<style>
#chat {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#chat-input {
  position: relative;
}
</style>
