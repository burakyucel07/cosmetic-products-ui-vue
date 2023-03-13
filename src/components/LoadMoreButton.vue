<template>
  <div class="text-center py-10">
    <button
      class="px-16 py-2 bg-slate-600 rounded-full text-xl text-white"
      @click="callback"
    >
      Load More
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadMoreButton",
  props: ["callback"],
});
</script>
