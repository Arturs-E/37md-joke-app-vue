<template>
  <div class="home">
    <CreateJokeForm :addJoke="addJoke" />
  </div>
  <div>
    <div v-for="joke of jokesData" :key="joke.id">
      <span>{{joke.question}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateJokeForm from "@/components/CreateJoke/CreateJokeForm.vue";

type JokesData = {
  id: string;
  question: string;
  answer: string;
  timestamp: number;
};

export default defineComponent({
  name: "Home",
  data: () => ({
    jokesData: [] as JokesData[],
  }),
  created() {
    this.jokesData = JSON.parse(localStorage.getItem("Vue jokes") || "[]");
  },
  methods: {
    addJoke(joke: JokesData) {
      this.jokesData.push(joke);
      localStorage.setItem("Vue jokes", JSON.stringify(this.jokesData));
    },
  },
  components: {
    CreateJokeForm,
  },
});
</script>
