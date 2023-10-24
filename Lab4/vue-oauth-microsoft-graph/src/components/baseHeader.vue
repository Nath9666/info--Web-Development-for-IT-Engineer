<template>
  <div class="nav-bar">
    <router-link to="/">
      <BaseButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
          />
          <path
            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
          />
        </svg>
        <p>Home</p>
      </BaseButton>
    </router-link>
    <router-link to="/about">
      <BaseButton>
        <p>About</p>
      </BaseButton>
    </router-link>
    <router-link to="/Conversation" v-if="this.$store.state.account">
      <BaseButton>
        <p>Conversation</p>
      </BaseButton>
    </router-link>
    <SigninButton @click="increment">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clip-rule="evenodd"
        />
      </svg>
      <p>Not yet logged-in</p>
    </SigninButton>
  </div>
</template>

<script>
import BaseButton from "./baseButton.vue";
import SigninButton from "./signinButton.vue";
import { ref } from "vue";

export default {
  name: "BaseHeader",
  components: {
    BaseButton,
    SigninButton,
  },
  setup(props, { emit }) {
    let user = ref(null);

    function setUser(e) {
      user.value = e;
      emit("userChanged", e);
    }

    return {
      user,
      setUser,
    };
  },
  methods: {
    increment() {
      this.$store.commit("login");
      console.log(this.$store.state.account);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #42b983;
  color: black;
  padding: 10px;
}

.nav-bar p {
  font-size: 16px;
}

.nav-bar svg {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  align-items: center;
}
</style>
