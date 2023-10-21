<template>
  <div>
    <asyncButton @click="signIn">
      <slot></slot>
    </asyncButton>

    <div v-if="userData">
      {{ userData }}
    </div>
  </div>
</template>

<script>
import asyncButton from "./asyncButton.vue";
import { signInAndGetUser } from "../lib/microsoftGraph.js";

export default {
  name: "SigninButton",
  props: {},
  components: {
    asyncButton,
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
        // Faites plus avec les données de l'utilisateur si nécessaire
        return user;
      } catch (error) {
        console.error("Erreur de connexion:", error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
