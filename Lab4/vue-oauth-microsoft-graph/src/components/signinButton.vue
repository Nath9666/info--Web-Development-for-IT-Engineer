<template>
  <div>
    <h1>{{ user }}</h1>
    <BaseButton @click="signIn">
      <slot></slot>
    </BaseButton>
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
  emits: ["userChanged", "submit"],
  setup(props, ctx) {
    ctx.emit("userChanged", props.user);
  },
  methods: {
    async signIn() {
      try {
        const user = await signInAndGetUser();
        this.userData = user;
        console.log("Utilisateur connecté:", user);
        this.$emit("userChanged", user);
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
