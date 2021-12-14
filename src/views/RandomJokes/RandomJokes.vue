<template>
  <div class="about">
    <h1 v-if="loading" class="heading1" style="text-align: center">
      Loading data...
    </h1>
    <div v-if="randomJokesData">
      <div class="heading-wrapper">
        <h2 class="heading2">Random jokes</h2>
      </div>
      <ol>
        <li v-for="{ joke, id } in randomJokesData.jokes" :key="id">
          <router-link :to="{ name: 'random-jokes-info', params: { id: id } }">
            {{ joke }}
          </router-link>
        </li>
      </ol>
    </div>
    <h2 v-else>There is no data available...</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

type RandomJokesData = {
  error: boolean;
  amount: number;
  jokes: {
    category: string;
    flags: {
      explicit: boolean;
      nsfw: boolean;
      political: boolean;
      racist: boolean;
      religious: boolean;
      sexist: boolean;
    };
    type: string;
    joke: string;
    id: number;
    safe: boolean;
    lang: string;
  }[];
};

export default defineComponent({
  name: "RandomJokes",
  data: () => ({
    loading: true,
    randomJokesData: {} as RandomJokesData,
  }),
  created() {
    axios
      .get("https://v2.jokeapi.dev/joke/Programming?type=single&amount=10")
      .then((response) => {
        this.randomJokesData = response.data;
        this.loading = false;
      });
  },
});
</script>

<style lang="scss">
@import "./RandomJokes.scss";
</style>
