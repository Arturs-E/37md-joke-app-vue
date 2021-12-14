<template>
  <h1 v-if="loading" class="heading1" style="text-align: center">
    Loading data...
  </h1>
  <div v-if="randomJokeData">
    <div class="heading-wrapper">
      <h2 class="heading2">Joke info</h2>
    </div>
    <div>
      <span>{{ randomJokeData.joke }}</span>
      <span>{{ randomJokeData.id }}</span>
      <span>{{ randomJokeData.category }}</span>
      <span>{{ randomJokeData.lang }}</span>
    </div>
  </div>
  <button @click="$router.go(-1)">Go back</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

type RandomJokeData = {
  error: boolean;
  category: string;
  type: string;
  joke: string;
  flags: {
    explicit: boolean;
    nsfw: boolean;
    political: boolean;
    racist: boolean;
    religious: boolean;
    sexist: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
};

export default defineComponent({
  name: "RandomJokeInfo",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    loading: true,
    randomJokeData: {} as RandomJokeData,
  }),
  created() {
    axios
      .get(`https://v2.jokeapi.dev/joke/Any?idRange=${this.id}`)
      .then((response) => {
        this.randomJokeData = response.data;
        this.loading = false;
      });
  },
});
</script>

<style lang="scss">
@import "./RandomJokeInfo.scss";
</style>
