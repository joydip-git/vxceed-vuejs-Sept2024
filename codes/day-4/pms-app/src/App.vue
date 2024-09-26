<template>
  <DashBoard />
  <div
    id="containerDiv"
    class="container container-fluid">
    <ProductList />
  </div>
</template>

<!-- options api -->

<!-- <script>
  import DashBoard from "./components/DashBoard.vue";
  import ProductList from "./components/ProductList.vue";

  export default {
    components: {
      DashBoard,
      ProductList,
    },
  };
</script> -->

<!-- composition api -->
<script setup>
  import DashBoard from "./components/DashBoard.vue";
  import ProductList from "./components/ProductList.vue";
</script>

<style lang="css" scoped>
  #containerDiv {
    margin-top: 20px;
  }
</style>
