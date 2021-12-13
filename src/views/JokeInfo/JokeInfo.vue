<template>
  <div>This is joke info</div>
  <span>Question: {{ joke.question }}</span>
  <span>Answer: {{ joke.answer }}</span>
  <span>ID: {{ id }}</span>
  <span>Timestamp: {{ joke.timestamp }}</span>
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
    joke: {} as JokesData,
  }),
  created() {
    const jokesData = JSON.parse(localStorage.getItem("Vue jokes")!);
    this.joke = jokesData.find((joke: JokesData) => joke.id === this.id)!;
  },
});
</script>
