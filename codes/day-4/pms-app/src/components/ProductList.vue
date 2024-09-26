<template>
  <h2>List of Products</h2>
  <br />
  <FilterProduct @filter-text-changed="(value) => (textToFilter = value)" />
  <br />
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody class="table-dark">
      <tr
        v-for="p of filteredProducts"
        :key="p.productId">
        <ProductRow :product="p" />
      </tr>
    </tbody>
  </table>
</template>

<!-- options api -->
<script>
  import { productRecords } from "../data/productrecords";
  import ProductRow from "./ProductRow.vue";
  import FilterProduct from "./FilterProduct.vue";

  export default {
    components: {
      ProductRow,
      FilterProduct,
    },
    data() {
      return {
        products: productRecords,
        textToFilter: "",
      };
    },
    computed: {
      filteredProducts() {
        if (this.products.length > 0 && this.textToFilter !== "") {
          return this.products.filter((p) =>
            p.productName
              .toLocaleLowerCase()
              .includes(this.textToFilter.toLocaleLowerCase())
          );
        } else return this.products;
      },
    },
  };
</script>

<!-- composition api -->
<!-- <script setup>
  import { computed, ref } from "vue";
  import { productRecords } from "../data/productrecords";
  import ProductRow from "./ProductRow.vue";
  import FilterProduct from "./FilterProduct.vue";

  const products = ref(productRecords);
  const textToFilter = ref("");

  const filteredProducts = computed(() => {
    if (products.value.length > 0 && textToFilter.value !== "") {
      return products.value.filter((p) =>
        p.productName
          .toLocaleLowerCase()
          .includes(textToFilter.value.toLocaleLowerCase())
      );
    } else return products.value;
  });
</script> -->
