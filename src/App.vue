<template>
  <div id="app">
    <router-view />
    <div class="flex-c flex-c-c global-error-message" v-show="globalErrorMessage">
      <p>{{ globalErrorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['globalErrorMessage']),
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f8f8f8;
}
.global-error-message {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 9999;
  p {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 16px;
    margin: 0;
    padding: 0;
    padding: 12px;
    border-radius: 4px;
    max-width: 300px;
    margin-top: -40vh;
  }
}
</style>
