<template>
  <td>{{ post.id }}</td>
  <td>{{ post.title }}</td>
</template>
<script>
  export default {
    //props: ["post"],
    props: {
      //post:Object
      post: {
        type: Object,
        required: true,
        default: null,
      },
    },
  };
</script>
