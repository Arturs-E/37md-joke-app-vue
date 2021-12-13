<template>
  <div class="joke-form-wrapper">
    <CreateJokeForm @joke-submit="addJoke" />
  </div>
  <div class="jokes-container">
    <div v-for="joke of jokesData" :key="joke.id" class="joke">
      <span class="joke__question">{{ joke.question }}</span>
      <span class="joke__answer">{{joke.answer}}</span>
      <div class="joke__button-wrapper">
        <button>Tell me</button>
        <button @click="$router.push(`/jokes/${joke.id}`)">Joke info</button>
        <button>Delete</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { uuid } from "vue-uuid";
import CreateJokeForm from "@/components/CreateJoke/CreateJokeForm.vue";

export type JokesData = {
  id: string;
  question: string;
  answer: string;
  timestamp: number;
};

type FormValues = {
  question: string;
  answer: string;
};

export default defineComponent({
  name: "Jokes",
  data: () => ({
    jokesData: [] as JokesData[],
    uuid: () => uuid.v4(),
  }),
  created() {
    this.jokesData = JSON.parse(localStorage.getItem("Vue jokes") || "[]");
  },
  methods: {
    addJoke(formValues: FormValues) {
      this.jokesData.push({
        ...formValues,
        id: this.uuid(),
        timestamp: this.getTimestamp(),
      });
      localStorage.setItem("Vue jokes", JSON.stringify(this.jokesData));
    },
    getTimestamp() {
      return Date.now();
    },
  },
  components: {
    CreateJokeForm,
  },
});
</script>

<style lang="scss">
@import "./Jokes.scss";
</style>
