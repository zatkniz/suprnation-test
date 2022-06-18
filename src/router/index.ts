import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EvaluationPage from "../views/EvaluationPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "evaluation",
    component: EvaluationPage,
  },
  {
    path: "/calculator",
    name: "calculator",
    component: EvaluationPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
