<template>
  <base-content>
    <HomePage />
  </base-content>
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import BaseContent from "./components/baseContent.vue";

export default {
  name: "App",
  components: {
    HomePage,
    BaseContent,
  },
};
</script>

<style>
body,
html {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
