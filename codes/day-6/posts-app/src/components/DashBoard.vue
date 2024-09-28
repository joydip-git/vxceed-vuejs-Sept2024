<template>
  <nav>
    <RouterLink to="/home">
      <button type="button">Home</button>
    </RouterLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button
      type="button"
      @click="$router.push('/posts')">
      Posts
    </button>
  </nav>
</template>
<script setup>
  import { RouterLink } from "vue-router";
</script>
