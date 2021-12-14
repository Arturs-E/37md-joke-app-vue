<template>
  <h2 v-if="!joke">We couldn't find the joke. Sorry!</h2>
  <div v-else class="joke-info" style="margin-bottom: 48px">
    <span><strong>Question:</strong> {{ joke.question }}</span>
    <span><strong>Answer:</strong> {{ joke.answer }}</span>
    <span><strong>ID:</strong> {{ id }}</span>
    <span
      ><strong>Timestamp:</strong>
      {{ formatTimestamp(`${joke.timestamp}`) }}</span
    >
  </div>
  <Button title="Go back" @on-click="$router.go(-1)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { JokesData } from "@/views/Jokes/Jokes.vue";
import Button from "@/components/Buttons/Button.vue";

export default defineComponent({
  name: "JokeInfo",
  components: { Button },
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
    const data = localStorage.getItem("Vue jokes");
    if (data) {
      const jokesData = JSON.parse(data);
      this.joke = jokesData.find((joke: JokesData) => joke.id === this.id);
    }
  },
  methods: {
    formatTimestamp(value: string) {
      const d = new Date(value);
      const time = d.toLocaleTimeString("en-us", {
        hour12: false,
      });
      const date = d.toLocaleDateString("en-us", {
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
@import "UserJokeInfo";
</style>
