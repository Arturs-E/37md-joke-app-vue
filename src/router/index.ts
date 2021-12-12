import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Jokes from "../views/Jokes.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "jokes",

  },
  {
    path: "/jokes",
    name: "Jokes",
    component: Jokes,
  },
  {
    path: "/random-jokes",
    name: "Random Jokes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RandomJokes.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
