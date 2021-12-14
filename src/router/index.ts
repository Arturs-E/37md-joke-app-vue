import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Jokes from "../views/Jokes/Jokes.vue";
import JokeInfo from "@/views/UserJokeInfo/UserJokeInfo.vue";
import RandomJokes from "@/views/RandomJokes/RandomJokes.vue";
import RandomJokeInfo from "@/views/RandomJokeInfo/RandomJokeInfo.vue";

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
  {
    path: "/random-jokes/:id",
    name: "random-jokes-info",
    component: RandomJokeInfo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
