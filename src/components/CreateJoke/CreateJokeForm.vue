<template>
  <form @submit.prevent="submitHandler" class="joke-form">
    <div class="heading-wrapper">
      <h2 class="heading2">Create a joke</h2>
    </div>
    <div class="joke-form__label-wrapper">
      <label for="question" class="joke-form__label">
        Question
        <input
          id="question"
          type="text"
          class="input-field"
          placeholder="Enter the question"
          ref="questionInputRef"
          v-model="inputValues.question"
        />
      </label>
      <label for="answer" class="joke-form__label">
        Answer
        <input
          id="answer"
          type="text"
          class="input-field"
          placeholder="Enter the punchline"
          v-model="inputValues.answer"
        />
      </label>
      <Button
        title="Create"
        :additional-classes="
          !inputValues.question || !inputValues.answer ? 'button--disabled' : ''
        "
      />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Buttons/Button.vue";

export default defineComponent({
  name: "CreateJokeForm",
  components: { Button },
  data: () => ({
    inputValues: { question: "", answer: "" },
  }),
  methods: {
    submitHandler() {
      if (this.inputValues.question && this.inputValues.answer) {
        this.$emit("joke-submit", {
          question: this.inputValues.question,
          answer: this.inputValues.answer,
        });
        this.inputValues = { question: "", answer: "" };
        const inputField = this.$refs.questionInputRef as HTMLInputElement;
        inputField.focus();
      }
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
