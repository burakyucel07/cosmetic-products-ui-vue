<template>
  <h1 class="text-4xl mb-3">{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainTitle",
  props: ["title"],
});
</script>
