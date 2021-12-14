<template>
  <h1 v-if="loading" class="heading1" style="text-align: center">
    Loading data...
  </h1>
  <div v-if="randomJokeData" class="joke-info-wrapper">
    <div class="heading-wrapper">
      <h2 class="heading2">Joke info</h2>
    </div>
    <div class="joke-info">
      <span><strong>Joke:</strong> {{ randomJokeData.joke }}</span>
      <span><strong>ID:</strong> {{ randomJokeData.id }}</span>
      <span><strong>Category:</strong> {{ randomJokeData.category }}</span>
      <span><strong>Language:</strong> {{ randomJokeData.lang }}</span>
    </div>
  </div>
  <Button title="Go back" @on-click="$router.go(-1)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import Button from "@/components/Buttons/Button.vue";

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
  components: { Button },
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
