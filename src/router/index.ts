import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Jokes from "../views/Jokes/Jokes.vue";
import JokeInfo from "@/views/JokeInfo/JokeInfo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "jokes",
  },
  {
    path: "/jokes",
    name: "jokes",
    component: Jokes,
  },
  {
    path: "/jokes/:id",
    name: "joke-info",
    component: JokeInfo,
    props: true,
  },
  {
    path: "/random-jokes",
    name: "random-jokes",
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
