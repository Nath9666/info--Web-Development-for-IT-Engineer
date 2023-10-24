import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import { signInAndGetUser } from "./lib/microsoftGraph.js";

async function signIn() {
  try {
    const user = await signInAndGetUser();
    //userData.value = user;
    console.log("Utilisateur connecté:", user);
    //emit("userChanged", userData);
    return user;
  } catch (error) {
    console.error("Erreur de connexion:", error);
  }
}

const store = createStore({
  state() {
    return {
      account: null,
    };
  },
  mutations: {
    async login(state) {
      state.account = signIn();
    },
  },
});

export default store;

createApp(App).use(store).use(router).mount("#app");
