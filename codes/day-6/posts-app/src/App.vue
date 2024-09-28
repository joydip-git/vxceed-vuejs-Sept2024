<template>
  <div>
    <DashBoard />
    <br /><br />
    <RouterView></RouterView>
  </div>
</template>

<script>
  // import PostListOptionsAPI from "./components/PostListOptionsAPI.vue";
  import { RouterView } from "vue-router";
  import DashBoard from "./components/DashBoard.vue";
  export default {
    components: {
      RouterView,
      DashBoard,
      //PostListOptionsAPI,
    },
  };
</script>

<!-- <template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
  // import PostListCompositionAPI from "./components/PostListCompositionAPI.vue";
  import { RouterView } from "vue-router";
</script> -->
