<template>
  <div class="home">
    <CreateJokeForm @joke-submit="addJoke" />
  </div>
  <div>
    <div v-for="joke of jokesData" :key="joke.id">
      <span>{{ joke.question }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { uuid } from "vue-uuid";
import CreateJokeForm from "@/components/CreateJoke/CreateJokeForm.vue";

type JokesData = {
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
