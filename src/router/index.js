import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/whatWedo",
      name: "whatWedo",

      component: () => import("@/views/whatWedo.vue"),
    },
    {
      path: "/digital-divide",
      name: "digital-divide",

      component: () => import("../views/DigitalDivide.vue"),
    },
    {
      path: "/getInvolved",
      name: "getInvolved",

      component: () => import("../views/GetInvolved.vue"),
    },
    {
      path: "/networks",
      name: "networks",
      component: () => import("../views/Networks.vue"),
    },
    {
      path: "/insights",
      name: "insights",
      component: () => import("../views/Insights.vue"),
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
