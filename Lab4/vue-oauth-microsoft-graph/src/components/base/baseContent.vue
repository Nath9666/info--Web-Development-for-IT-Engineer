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
import { ref, provide } from "vue";

export default {
  name: "BaseContent",
  components: {
    BaseHeader,
    BaseFooter,
  },
  setup() {
    let user = ref(null);

    provide("user", user);

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

<style scoped></style>
