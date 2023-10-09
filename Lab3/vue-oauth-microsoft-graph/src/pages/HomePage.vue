<template>
  <div class="hello">
    <h1>Here comes the content of the HomePage</h1>
    <BaseButton>Click me</BaseButton>
    <BaseButton disabled="true">Disabled Button</BaseButton>
    <BaseButton color="warn">Warn Button</BaseButton>
    <BaseButton color="danger">Danger Button</BaseButton>
    <AsyncButton>Async Button</AsyncButton>
  </div>
</template>

<script>
import BaseButton from "../components/baseButton.vue";
import AsyncButton from "../components/asyncButton.vue";

export default {
  name: "HomePage",
  props: {},
  components: { BaseButton, AsyncButton },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  color: black;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 2%;
}
</style>
