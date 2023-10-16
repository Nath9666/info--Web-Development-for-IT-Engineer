<template>
  <div>
    <base-button @click="signIn">
      <slot></slot>
    </base-button>

    <div v-if="userData">
      <!-- Affichez les informations de l'utilisateur ici -->
      {{ userData.account.username }}
    </div>
  </div>
</template>

<script>
import BaseButton from "./baseButton.vue";
import { signInAndGetUser } from "../lib/microsoftGraph.js";

export default {
  name: "SigninButton",
  props: {},
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
        // Faites plus avec les données de l'utilisateur si nécessaire
      } catch (error) {
        console.error("Erreur de connexion:", error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
