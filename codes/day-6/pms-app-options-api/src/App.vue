<template>
  <DashBoard />
  <div
    id="containerDiv"
    class="container container-fluid">
    <RouterView></RouterView>
  </div>
</template>

<script>
  import DashBoard from "./components/common/DashBoard.vue";

  export default {
    components: {
      DashBoard,
    },
  };
</script>

<style lang="css" scoped>
  #containerDiv {
    margin-top: 20px;
  }
</style>
