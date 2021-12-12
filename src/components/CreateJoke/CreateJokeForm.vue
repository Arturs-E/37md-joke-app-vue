<template>
  <form
    @submit.prevent
    @submit="
      processInputFields({
        id: uuid(),
        question: inputValues.question,
        answer: inputValues.answer,
        timestamp: getTimestamp(),
      })
    "
    class="joke-form"
  >
    <h2 class="heading2">Create a joke</h2>
    <div class="joke-form__label-wrapper">
      <label for="question" class="joke-form__label">
        Question
        <input
          id="question"
          type="text"
          ref="questionInputRef"
          v-model="inputValues.question"
        />
      </label>
      <label for="answer" class="joke-form__label">
        Answer
        <input id="answer" type="text" v-model="inputValues.answer" />
      </label>
      <button type="submit">Create</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { uuid } from "vue-uuid";

type JokesData = {
  id: string;
  question: string;
  answer: string;
  timestamp: number;
};

export default defineComponent({
  name: "CreateJokeForm",
  props: {
    addJoke: {
      type: Function as PropType<(value: JokesData) => void>,
      required: true,
    },
  },
  data: () => ({
    inputValues: { question: "", answer: "" },
    jokesData: [] as JokesData[],
    uuid: () => uuid.v4(),
  }),
  methods: {
    processInputFields(joke: JokesData) {
      this.addJoke(joke);
      this.inputValues = { question: "", answer: "" };
      const inputField = this.$refs.questionInputRef as HTMLInputElement;
      inputField.focus();
    },
    getTimestamp() {
      return Date.now();
    },
  },
  mounted() {
    const inputField = this.$refs.questionInputRef as HTMLInputElement;
    inputField.focus();
  },
});
</script>

<style lang="scss">
@import "./CreateJokeForm";
</style>
