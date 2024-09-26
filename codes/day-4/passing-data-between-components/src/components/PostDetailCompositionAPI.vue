<template>
  <td>{{ post.id }}</td>
  <td>{{ post.title }}</td>
</template>

<script setup>
  //defineProps(["post"])
  defineProps({
    //post:Object
    post: {
      requied: true,
      type: Object,
      default: null,
    },
  });
</script>
