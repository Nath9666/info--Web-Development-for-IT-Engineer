<template>
  <div>
    <BaseHeader :user="user" @userChanged="setUser($event)" />
    <p>{{ user }}</p>
    <slot></slot>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "./baseHeader.vue";
import BaseFooter from "./baseFooter.vue";
import { ref } from "vue";

export default {
  name: "BaseContent",
  components: {
    BaseHeader,
    BaseFooter,
  },
  setup() {
    let user = ref(null);

    function setUser(e) {
      user.value = e;
    }

    return {
      user,
      setUser,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
