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

<script>
  import { productinfostore } from "@/store/productinfostore";
  import { mapActions, mapState } from "pinia";

  export default {
    computed: {
      ...mapState(productinfostore, ["product", "errorInfo", "isFetchOver"]),
    },
    methods: {
      ...mapActions(productinfostore, ["fetchProductById"]),
    },
    mounted() {
      this.fetchProductById(+this.$route.params["id"]);
    },
  };
</script>
