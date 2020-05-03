<template>
  <div id="sidenav">{{ username }}</div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.getters.username;
    }
  }
};
</script>

<style lang="scss">
#sidenav {
  background-color: #004d40;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  color: white;
}
</style>
