<template>
  <div v-if="isFetchOver">
    <div v-if="errorInfo === ''">
      <div v-if="product">Details of: &nbsp;{{ product.productName }}</div>
      <div v-else>
        <span>No product found</span>
      </div>
    </div>
    <div v-else>
      <span>{{ errorInfo }}</span>
    </div>
  </div>
  <div v-else>
    <span>Loading....</span>
  </div>
</template>

<script setup>
  import { productinfostore } from "@/store/productinfostore";
  import { storeToRefs } from "pinia";
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";

  const store = productinfostore();
  const { product, isFetchOver, errorInfo } = storeToRefs(store);
  const id = +useRoute().params["id"];

  onMounted(() => store.fetchProductById(id));
</script>
