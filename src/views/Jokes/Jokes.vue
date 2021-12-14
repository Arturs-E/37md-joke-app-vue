<template>
  <div class="joke-form-wrapper">
    <CreateJokeForm @joke-submit="addJoke" />
  </div>
  <hr class="hr" />
  <div class="jokes-container">
    <div v-for="joke of jokesData" :key="joke.id" class="joke">
      <span class="joke__question">{{ joke.question }}</span>
      <span v-if="joke.isAnswerVisible" class="joke__answer">{{
        joke.answer
      }}</span>
      <div class="joke__button-wrapper">
        <button @click="setAnswerVisible(joke.id)">Tell me</button>
        <button @click="goToJoke(joke.id)">Joke info</button>
        <button @click="removeJoke(joke.id)">Delete</button>
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
  isAnswerVisible: boolean;
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
  mounted() {
    this.jokesData = JSON.parse(localStorage.getItem("Vue jokes") || "[]");
  },
  watch: {
    jokesData: {
      handler() {
        localStorage.setItem("Vue jokes", JSON.stringify(this.jokesData));
      },
      deep: true,
    },
  },
  methods: {
    addJoke(formValues: FormValues) {
      this.jokesData.push({
        ...formValues,
        id: this.uuid(),
        timestamp: this.getTimestamp(),
        isAnswerVisible: false,
      });
    },
    getTimestamp() {
      return Date.now();
    },
    removeJoke(id: string) {
      this.jokesData = this.jokesData.filter((joke) => joke.id !== id);
    },
    setAnswerVisible(id: string) {
      this.jokesData = this.jokesData.map((joke) => {
        if (joke.id === id) {
          return { ...joke, isAnswerVisible: !joke.isAnswerVisible };
        }
        return joke;
      });
    },
    goToJoke(id: string) {
      this.$router.push({ name: "joke-info", params: { id: id } });
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
