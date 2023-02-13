<template>
  <MainNavigation />
  <div class="container mx-auto px-2"><RouterView /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavigation from "@/components/MainNavigation.vue";
import { RouterView } from "vue-router";
import "./assets/tailwind.css";

export default defineComponent({
  name: "App",
  components: {
    MainNavigation,
  },
});
</script>
