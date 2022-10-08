import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "../views/LayoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/happiness/picture",
    },
    {
      path: "/happiness",
      name: "happiness",
      redirect: "/happiness/picture",
      component: LayoutView,
      children: [
        {
          path: "/happiness/picture",
          name: "picture",
          component: () => import("../components/happiness/Picture.vue"),
        },
        {
          path: "/happiness/test",
          name: "test",
          component: () => import("../components/happiness/Test.vue"),
        },
      ],
    },
    {
      path: "/happiness2",
      name: "happiness2",
      component: LayoutView,
    },
  ],
});

export default router;
