<template>
  <div id="chat-display">
    <p v-for="(message, index) in messages" :key="index">
      <b>{{ message.username }} :</b>
      {{ message.text }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    messages() {
      return this.$store.getters.messages;
    }
  }
};
</script>

<style>
#chat-display {
  padding: 2rem;
}
</style>
