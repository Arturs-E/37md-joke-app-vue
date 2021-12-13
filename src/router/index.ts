import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Jokes from "../views/Jokes/Jokes.vue";
import JokeInfo from "@/views/JokeInfo/JokeInfo.vue";
import RandomJokes from "@/views/RandomJokes/RandomJokes.vue";

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
    component: RandomJokes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
