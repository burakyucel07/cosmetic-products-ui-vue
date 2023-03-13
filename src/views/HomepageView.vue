<template>
  <MainTitle title="Cosmetic Shop" />
  <p class="text-lg mb-6">
    Cosmetic shop has a great variation of cosmetic products. Cleaning, scents,
    moisturizers, and more. Please don't hesitate to check our products.
  </p>

  <div class="pt-12 pr-8 pb-12 pl-8 bg-slate-200 text-gray-900 my-8 mx-2">
    <h1 class="text-4xl font-bold mb-4">We hate animal testing!</h1>
    <p class="text-3xl">
      We're awesome.
      <RouterLink to="/products" class="underline">Shop now!</RouterLink>
    </p>
  </div>

  <div class="pt-6 pr-8 pb-16 pl-8 bg-slate-200 text-gray-900 my-8 mx-2">
    <h1 class="text-9xl text-center font-extrabold mb-4">Sale! %50</h1>
    <div class="text-3xl text-center m-0">
      <RouterLink to="/products" class="underline">Shop now!</RouterLink>
    </div>
  </div>

  <MainTitle title="Our Newly Added Products" />
  <ProductGrid :items="items" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainTitle from "@/components/MainTitle.vue";
import ProductGrid from "@/components/ProductGrid.vue";
import axios from "axios";

export default defineComponent({
  name: "HomepageView",
  components: {
    MainTitle,
    ProductGrid,
  },
  data() {
    return {
      items: [
        {
          description: "",
          name: "",
          type: "",
          price: 0,
          weight: 0,
          ingredients: "",
        },
      ],
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8080/api/v1/products?pageNumber=0&pageSize=10`)
      .then((response) => {
        if (response.request.status === 200) {
          const data = response.data;
          this.items = data;
        }
      });
  },
});
</script>
