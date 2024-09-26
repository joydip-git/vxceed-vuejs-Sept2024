<template>
  <h2>List of Products</h2>
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
        v-for="p of products"
        :key="p.productId">
        <ProductRow :product="p" />
      </tr>
    </tbody>
  </table>
</template>

<!-- options api -->
<!-- <script>
  import { productRecords } from "../data/productrecords";
  import ProductRow from "./ProductRow.vue";
  export default {
    components: {
      ProductRow,
    },
    data() {
      return {
        products: productRecords,
      };
    },
  };
</script> -->

<!-- composition api -->
<script setup>
  import { ref } from "vue";
  import { productRecords } from "../data/productrecords";
  import ProductRow from "./ProductRow.vue";

  const products = ref(productRecords);
</script>
