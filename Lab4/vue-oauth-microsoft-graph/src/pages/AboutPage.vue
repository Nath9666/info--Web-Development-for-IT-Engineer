<template>
  <div class="about">
    <h1>Here comes the content of the AboutPage</h1>
    <p>So the group it's compose of</p>
    <ul>
      <li v-for="name in GroupPeopleName" :key="name">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  components: {},
  props: { user: Object },
  data() {
    return {
      GroupPeopleName: ["Nathan MOREL", "Laura SADAA", "Miggao GONG"],
    };
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
