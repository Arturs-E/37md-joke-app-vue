<template>
  <div class="joke-form-wrapper">
    <CreateJokeForm @joke-submit="addJoke" />
  </div>
  <hr class="hr" />
  <div class="jokes-container">
    <input
      type="text"
      class="input-field"
      placeholder="Search joke..."
      v-model="searchInput"
      @input="searchJoke"
    />
    <div v-for="joke of searchJoke()" :key="joke.id" class="joke">
      <span class="joke__question">{{ joke.question }}</span>
      <span v-if="joke.isAnswerVisible" class="joke__answer">
        {{ joke.answer }}
      </span>
      <div class="joke__button-wrapper">
        <Button title="Tell me" @on-click="setAnswerVisible(joke.id)" />
        <Button
          title="Joke info"
          additional-classes="button--secondary"
          @on-click="goToJoke(joke.id)"
        />
        <Button
          title="Delete"
          additional-classes="button--danger"
          @on-click="removeJoke(joke.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { uuid } from "vue-uuid";
import CreateJokeForm from "@/components/CreateJoke/CreateJokeForm.vue";
import Button from "@/components/Buttons/Button.vue";
import { defaultUserJokeData } from "@/assets/defaultUserJokeData";

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
    searchInput: "",
  }),
  mounted() {
    const data = localStorage.getItem("Vue jokes");
    if (data) {
      this.jokesData = JSON.parse(data);
    } else {
      this.jokesData = [...defaultUserJokeData];
      localStorage.setItem("Vue jokes", JSON.stringify(this.jokesData));
    }
  },
  methods: {
    addJoke(formValues: FormValues) {
      this.jokesData.push({
        ...formValues,
        id: this.uuid(),
        timestamp: this.getTimestamp(),
        isAnswerVisible: false,
      });
      localStorage.setItem("Vue jokes", JSON.stringify(this.jokesData));
    },
    getTimestamp() {
      return Date.now();
    },
    removeJoke(id: string) {
      this.jokesData = this.jokesData.filter((joke) => joke.id !== id);
      localStorage.setItem("Vue jokes", JSON.stringify(this.jokesData));
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
    searchJoke() {
      if (!this.searchInput) {
        return this.jokesData;
      } else {
        return this.jokesData.filter((joke) =>
          joke.question.includes(this.searchInput)
        );
      }
    },
  },
  components: {
    Button,
    CreateJokeForm,
  },
});
</script>

<style lang="scss">
@import "./Jokes.scss";
</style>
