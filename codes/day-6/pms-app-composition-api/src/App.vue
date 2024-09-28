<template>
  <DashBoard />
  <div
    id="containerDiv"
    class="container container-fluid">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
  import DashBoard from "./components/common/DashBoard.vue";
</script>

<style lang="css" scoped>
  #containerDiv {
    margin-top: 20px;
  }
</style>
