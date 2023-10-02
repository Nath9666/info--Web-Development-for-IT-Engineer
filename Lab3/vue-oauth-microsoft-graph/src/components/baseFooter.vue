<template>
  <div>
    <p>
      This work is protected by international laws
      {{ new Date().getFullYear() }} | by Nathan
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: black;
  padding: 10px;
  height: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
}

p {
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  position: absolute;
  bottom: 0;
}
</style>
