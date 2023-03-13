<template>
  <RouterLink :to="productLink">
    <div
      class="mx-3 my-3 bg-gradient-to-b from-white to-slate-300 rounded-lg py-4 px-4 h-80"
    ></div>
    <div class="text-center pb-4">
      <h2 class="text-2xl">{{ name }}</h2>
      <h5 class="text-lg">{{ type }}</h5>
      <div class="text-bold text-3xl pt-1">${{ price }}</div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductItem",
  props: ["name", "type", "price", "id"],
  computed: {
    productLink() {
      return `/product/${this.id}`;
    },
  },
});
</script>
