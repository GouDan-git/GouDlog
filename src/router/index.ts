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
          path: "/picture",
          name: "picture",
          component: () => import("../components/happiness/picture.vue"),
        },
      ],
    },
  ],
});

export default router;
