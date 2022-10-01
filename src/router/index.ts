import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "../views/LayoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LayoutView,
      children: [
        {
          path: "/",
          name: "index",
          component: () => import("../views/HomeView.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

export default router;
