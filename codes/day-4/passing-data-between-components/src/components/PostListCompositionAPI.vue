<template>
  <h2>All Posts</h2>
  <br />
  <table>
    <thead>
      <tr>
        <th>Post ID</th>
        <th>Post Title</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="p of postlist"
        :key="p.id">
        <PostDetailOptionsAPI
          :post="p"
          @delete-post="deletePostFromArray" />
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import { ref } from "vue";
  import { posts } from "../data/posts";
  import PostDetailOptionsAPI from "./PostDetailOptionsAPI.vue";

  const postlist = ref(posts);
  const deletePostFromArray = (id) => {
    const index = this.postlist.findIndex((p) => p.id === id);
    if (index >= 0) {
      this.postlist.splice(index, 1);
    }
  };
</script>
