<template>
  <td>
    <u>{{ post.id }}</u>
  </td>
  <td>{{ post.title }}</td>
  <td>
    <!-- <button
      type="button"
      @click="passPostId">
      Delete
    </button> -->
    <button
      type="button"
      @click="$emit('deletePost', post.id)">
      Delete
    </button>
  </td>
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
    emits: ["deletePost"],
    methods: {
      passPostId() {
        console.log(this.$props.post.id);
        this.$emit("deletePost", this.$props.post.id);
      },
    },
  };
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
