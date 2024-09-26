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
  defineEmits(["deletePost"]);
  /*
  const emits = defineEmits(["deletePost"]);
  const passPostId = () => {
    console.log(this.$props.post.id);
    emits("deletePost", this.$props.post.id);
  };
  */
</script>
