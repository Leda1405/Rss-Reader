import { createRouter, createWebHistory ,createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/info",
    name: "Info",
    component: () => import(/* webpackChunkName: "info" */ "../views/Info.vue"),
  },
];

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
