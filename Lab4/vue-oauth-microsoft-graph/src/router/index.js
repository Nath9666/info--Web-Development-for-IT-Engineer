import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/home",
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
        const userIsLoggedIn = false;
        if (userIsLoggedIn) {
          next();
        } else {
          next("/home");
        }
      },
      component: () => import("@/pages/ConversationsIndexPage.vue"),
    },
  ],
});

export default router;
