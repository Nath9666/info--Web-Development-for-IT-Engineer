<template>
  <div>
    <BaseButton>
      <slot></slot>
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "./base/baseButton.vue";
import { signInAndGetUser } from "../lib/microsoftGraph.js";
import { ref } from "vue";

export default {
  name: "SigninButton",
  props: {
    user: Object,
  },
  components: {
    BaseButton,
  },
  setup(props, { emit }) {
    let userData = ref(null);

    async function signIn() {
      try {
        const user = await signInAndGetUser();
        userData.value = user;
        console.log("Utilisateur connecté:", user);
        emit("userChanged", userData);
        return user;
      } catch (error) {
        console.error("Erreur de connexion:", error);
      }
    }

    return {
      userData,
      signIn,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
