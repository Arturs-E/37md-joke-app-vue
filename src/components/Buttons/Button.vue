<template>
  <button @click="clickHandler" class="button" :class="additionalClasses">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    title: String,
    additionalClasses: String,
  },
  methods: {
    clickHandler() {
      this.$emit("on-click");
    },
  },
});
</script>

<style lang="scss">
@import "./Button.scss";
</style>
