<template>
  <td>
    <u>{{ post.id }}</u>
  </td>
  <td>{{ post.title }}</td>
  <td>
    <button
      type="button"
      @click="$emit('deletePost', post.id)">
      Delete
    </button>
  </td>
</template>

<script setup>
  defineProps({
    post: {
      requied: true,
      type: Object,
      default: null,
    },
  });
  defineEmits(["deletePost"]);
</script>
<style scoped>
  button {
    background-color: red;
    color: white;
    border: 1px solid red;
    border-radius: 5px;
    padding: 5px;
  }
</style>
