<template>
  <div class="hello">
    <h1>Here comes the content of the HomePage</h1>
    <BaseButton color="primary">Click me</BaseButton>
    <BaseButton disabled="true" color="danger">Disabled Button</BaseButton>
  </div>
</template>

<script>
import BaseButton from "../components/baseButton.vue";

export default {
  name: "HomePage",
  props: {},
  components: { BaseButton },
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
