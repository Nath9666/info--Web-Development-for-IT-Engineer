<template>
  <div class="hello">
    <h1>Here comes the content of the HomePage</h1>
    <div v-if="user">
      <!-- Affichez le nom d'utilisateur ici -->
      {{ user.account.username }}
    </div>
    <BaseButton>Click me</BaseButton>
    <BaseButton disabled="true">Disabled Button</BaseButton>
    <BaseButton color="warn">Warn Button</BaseButton>
    <BaseButton color="danger">Danger Button</BaseButton>
    <AsyncButton :color="'primary'" :initialTimer="timer">
      Click me asynchronously
    </AsyncButton>
  </div>
</template>

<script>
import BaseButton from "../components/baseButton.vue";
import AsyncButton from "../components/asyncButton.vue";

export default {
  name: "HomePage",
  components: { BaseButton, AsyncButton },
  props: { user: Object },
  data() {
    return {
      clickCount: 0,
    };
  },
  computed: {
    timer() {
      return this.clickCount * 1000;
    },
  },
};
</script>

<style scoped>
div {
  color: black;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 2%;
}
</style>
