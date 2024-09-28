<template>
  <div v-if="isFetchOver">
    <div v-if="errorInfo === ''">
      <div v-if="products.length > 0">
        <h2>List of Products</h2>
        <br />
        <FilterProduct
          @filter-text-changed="(value) => (textToFilter = value)" />
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
      </div>
      <div v-else>
        <span>No Products</span>
      </div>
    </div>
    <div v-else>
      <span>{{ errorInfo }}</span>
    </div>
  </div>
  <div v-else>
    <span>Loading...</span>
  </div>
</template>

<script setup>
  import { computed, onMounted, ref } from "vue";
  import ProductRow from "./ProductRow.vue";
  import FilterProduct from "./FilterProduct.vue";
  import { productsstore } from "@/store/productsstore";
  import { storeToRefs } from "pinia";

  const store = productsstore();
  const { products, errorInfo, isFetchOver } = storeToRefs(store);

  const textToFilter = ref("");

  onMounted(() => store.fetchProducts());

  const filteredProducts = computed(() => {
    if (products.value.length > 0 && textToFilter.value !== "") {
      return products.value.filter((p) =>
        p.productName
          .toLocaleLowerCase()
          .includes(textToFilter.value.toLocaleLowerCase())
      );
    } else return products.value;
  });
</script>
