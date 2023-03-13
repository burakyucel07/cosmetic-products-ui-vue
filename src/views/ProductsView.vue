<template>
  <h1 class="text-5xl mb-3">All Products of Ours</h1>
  <ProductGrid :items="items" />
  <LoadMoreButton :callback="loadMoreCallback" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductGrid from "@/components/ProductGrid.vue";
import LoadMoreButton from "@/components/LoadMoreButton.vue";
import axios from "axios";

export default defineComponent({
  name: "ProductsView",
  components: {
    ProductGrid,
    LoadMoreButton,
  },
  data() {
    return {
      pageNumber: 0,
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
  methods: {
    loadMoreCallback: function () {
      axios
        .get(
          `http://localhost:8080/api/v1/products?pageNumber=${this.pageNumber}&pageSize=10`
        )
        .then((response) => {
          if (response.request.status === 200) {
            const data = response.data;
            this.items = [...this.items, ...data];

            this.pageNumber++;
          }
        });
    },
  },
  mounted() {
    axios
      .get(
        `http://localhost:8080/api/v1/products?pageNumber=${this.pageNumber}&pageSize=10`
      )
      .then((response) => {
        if (response.request.status === 200) {
          const data = response.data;
          this.items = data;

          this.pageNumber++;
        }
      });
  },
});
</script>
