<template>
  <MainNavigation />
  <div class="container mx-auto px-2 pt-6">
    <RouterView />
    <div
      class="max-w-full mx-auto border-solid border-t-2 border-t-stone-200 mt-20"
    >
      <div class="mb-10 mt-20 text-center">Copyright - 2023</div>
    </div>
  </div>
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
