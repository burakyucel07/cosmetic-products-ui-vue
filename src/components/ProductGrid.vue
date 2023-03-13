<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <ProductItem
      v-for="(item, i) in items"
      :key="i"
      :name="item.name"
      :type="item.type"
      :price="item.price"
      :id="item.id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductItem from "@/components/ProductItem.vue";

export default defineComponent({
  name: "ProductGrid",
  props: ["items"],
  components: {
    ProductItem,
  },
});
</script>
