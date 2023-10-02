<template>
  <div>
    <BaseHeader />
    <HomePage />
    <BaseFooter />
  </div>
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import BaseHeader from "./components/baseHeader.vue";
import BaseFooter from "./components/baseFooter.vue";

export default {
  name: "App",
  components: {
    HomePage,
    BaseHeader,
    BaseFooter,
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
