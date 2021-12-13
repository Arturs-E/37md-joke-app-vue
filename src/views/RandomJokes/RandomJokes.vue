<template>
  <div class="about">
    <h1>This is an about page</h1>
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
      explicit: boolean,
      nsfw: boolean,
      political: boolean,
      racist: boolean,
      religious: boolean,
      sexist: boolean,
    },
    type: string;
    joke: string;
    id: number;
    safe: boolean;
    lang: string;
  }[]
}

export default defineComponent({
  name: "RandomJokes",
  data: () => ({
    randomJokesData: {} as RandomJokesData,
  }),
  async created() {
    await axios
      .get("https://v2.jokeapi.dev/joke/Programming?type=single&amount=10")
      .then((response) => (this.randomJokesData = response.data));
  },
})
</script>

<style lang="scss">
@import "./RandomJokes.scss";
</style>
