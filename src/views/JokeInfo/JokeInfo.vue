<template>
  <h2 v-if="!joke">We couldn't find the joke. Sorry!</h2>
  <div v-else class="joke-info">
    <span><strong>Question:</strong> {{ joke.question }}</span>
    <span><strong>Answer:</strong> {{ joke.answer }}</span>
    <span><strong>ID:</strong> {{ id }}</span>
    <span><strong>Timestamp:</strong> {{ formatTimestamp(joke.timestamp) }}</span>
  </div>
  <button @click="$router.go(-1)">Go back</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { JokesData } from "@/views/Jokes/Jokes.vue";

export default defineComponent({
  name: "JokeInfo",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    joke: {} as JokesData | undefined,
  }),
  mounted() {
    const jokesData = JSON.parse(localStorage.getItem("Vue jokes")!);
    this.joke = jokesData.find((joke: JokesData) => joke.id === this.id);
  },
  methods: {
    formatTimestamp(value: string) {
      const d = new Date(value);
      const time = d.toLocaleTimeString("lv-LV", {
        hour12: false,
      });
      const date = d.toLocaleDateString("lv-LV", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return `${time} | ${date}`;
    },
  },
});
</script>

<style lang="scss">
@import "./JokeInfo.scss";
</style>
