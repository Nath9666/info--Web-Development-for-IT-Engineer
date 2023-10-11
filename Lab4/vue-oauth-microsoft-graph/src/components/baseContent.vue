<template>
  <div>
    <BaseHeader />
    <slot></slot>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "./baseHeader.vue";
import BaseFooter from "./baseFooter.vue";

export default {
  name: "BaseContent",
  components: {
    BaseHeader,
    BaseFooter,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
