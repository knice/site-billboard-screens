<template>
  <div id="app">
    <Billboards />
  </div>
</template>

<script>
import Billboards from "./components/Billboards.vue";

export default {
  name: "app",
  components: {
    Billboards
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
