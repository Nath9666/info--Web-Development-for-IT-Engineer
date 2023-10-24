<template>
  <base-content :user="user">
    <router-view :user="user" />
  </base-content>
</template>

<script>
import BaseContent from "./components/baseContent.vue";
import { createStore } from "vuex";

const test = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default {
  name: "App",
  components: {
    BaseContent,
  },
  data() {
    return {
      user: null,
      test,
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
