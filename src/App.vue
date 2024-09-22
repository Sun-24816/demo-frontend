<template>
  <div id="app">
    <router-view />
    <nav-bar></nav-bar>
  </div>
</template>
<script>
import navBar from "./components/navBar.vue";
export default {
  name: "App",
  components: {
    navBar,
  },
};
</script>

<style>
#app {
  height: 100vh;
}
* {
  margin: 0;
  padding: 0;
}
</style>
