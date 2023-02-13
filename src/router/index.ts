import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomepageView from "../views/HomepageView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomepageView,
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import("../views/ProductsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
