<template>
  <header class="pt-6 pr-2 pb-8 pl-2 text-center bg-slate-200">
    <div class="text-2xl">Cosmetic Shop</div>
    <nav class="pt-2">
      <ul class="inline pl-0">
        <li class="inline" v-for="(navLink, i) in navLinks" :key="i">
          <span v-if="i !== 0" class="py-0 px-3">|</span>
          <RouterLink :to="navLink.to">{{ navLink.text }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainNavigation",
  data() {
    return {
      navLinks: [
        {
          to: "/",
          text: "Home",
        },
        {
          to: "/products",
          text: "All Products",
        },
        {
          to: "/products/bath",
          text: "Bath Products",
        },
        {
          to: "/products/body",
          text: "Body Products",
        },
        {
          to: "/products/perfumes",
          text: "Perfumes",
        },
        {
          to: "/about",
          text: "About",
        },
      ],
    };
  },
});
</script>
