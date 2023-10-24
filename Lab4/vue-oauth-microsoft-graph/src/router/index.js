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
      path: "/conversations",
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
    {
      path: "/conversations/:id",
      component: () => import("@/components/ConversationShowPage.vue"),
      props: true,
    },
  ],
});

export default router;
