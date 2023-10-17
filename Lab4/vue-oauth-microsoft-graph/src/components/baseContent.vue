<template>
  <div>
    <BaseHeader />
    <slot :user="user"></slot>
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
  props: {
    user: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
