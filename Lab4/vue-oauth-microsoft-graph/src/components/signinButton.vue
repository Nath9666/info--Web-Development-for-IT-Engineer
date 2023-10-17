<template>
  <div>
    <base-button @click="signIn">
      <slot></slot>
    </base-button>

    <div v-if="userData">
      {{ userData.account.username }}
    </div>
  </div>
</template>

<script>
import BaseButton from "./baseButton.vue";
import { signInAndGetUser } from "../lib/microsoftGraph.js";

export default {
  name: "SigninButton",
  props: {
    user: Object,
  },
  components: {
    BaseButton,
  },
  data() {
    return {
      userData: null,
    };
  },
  methods: {
    async signIn() {
      try {
        const user = await signInAndGetUser();
        this.userData = user;
        this.$emit("userSignedIn", user);
        return user;
      } catch (error) {
        console.error("Erreur de connexion:", error);
      }
    },
  },
};
</script>

<style scoped></style>
