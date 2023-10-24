import { createRouter, createWebHistory } from "vue-router";
import store from "../main.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/AboutPage.vue"),
    },
    {
      path: "/Conversation",
      name: "Conversation",
      beforeEnter: (to, from, next) => {
        const userIsLoggedIn = store.state.account !== null;
        console.log("store", store);
        if (userIsLoggedIn) {
          next();
        } else {
          next("./");
        }
      },
      component: () => import("@/pages/ConversationsIndexPage.vue"),
    },
  ],
});

export default router;
