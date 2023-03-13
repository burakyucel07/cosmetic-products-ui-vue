<template>
  <div class="mx-20">
    <div class="text-2xl text-center bg-slate-300 py-5 px-10">
      We hate animal testing!
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-10"
    >
      <div
        class="col-span-1 mx-3 my-3 bg-gradient-to-b from-white to-slate-300 rounded-lg py-4 px-4 h-80"
      ></div>
      <div class="px-10 col-span-2">
        <h2 class="text-2xl">{{ productData.name }}</h2>
        <h5 class="text-lg">{{ productData.type }}</h5>
        <p class="py-5">
          {{ productData.description }}
        </p>
        <span class="text-bold text-3xl pt-1">${{ productData.price }}</span>
        <span class="text-slate-500 px-2">for</span
        ><span class="font-bold text-lg">{{ productData.weight }}g</span>
        <div class="my-5 flex">
          <button
            class="px-4 pb-1 bg-slate-600 rounded-full text-white text-4xl"
            @click="addProductAmount(-1)"
          >
            -
          </button>
          <input
            type="text"
            class="text-4xl mx-2 w-40"
            :value="addedProductAmount"
          />
          <button
            class="px-4 pb-1 bg-slate-600 rounded-full text-white text-4xl"
            @click="addProductAmount(1)"
          >
            +
          </button>
          <button
            class="px-8 py-2 ml-5 bg-slate-600 rounded-full text-xl text-white"
          >
            Add to Bag
          </button>
        </div>
        <div class="mt-8">
          <h5 class="mb-2 text-xl">Certifications</h5>
          <div class="w-24 h-12 rounded-lg bg-slate-400"></div>
        </div>
        <div class="mt-8">
          <h5 class="mb-2 text-xl">Ingredients</h5>
          <p>
            {{ productData.ingredients }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "ProductView",
  data() {
    return {
      addedProductAmount: 0,
      productData: {
        description: "",
        name: "",
        type: "",
        price: 0,
        weight: 0,
        ingredients: "",
      },
    };
  },
  methods: {
    addProductAmount(amount: number) {
      this.addedProductAmount += amount;

      if (this.addedProductAmount < 0) {
        this.addedProductAmount = 0;
      }
    },
  },
  mounted() {
    const productId = this.$route.params.id;

    axios
      .get(`http://localhost:8080/api/v1/products/${productId}`)
      .then((response) => {
        if (response.request.status === 200) {
          const data = response.data;
          this.productData = data;
        }
      });
  },
});
</script>
