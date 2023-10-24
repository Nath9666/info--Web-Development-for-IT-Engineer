<template>
  <base-content>
    <router-view />
  </base-content>
</template>

<script>
import BaseContent from "./components/base/baseContent.vue";

export default {
  name: "App",
  components: {
    BaseContent,
  },
  data() {
    return {
      user: null,
    };
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
