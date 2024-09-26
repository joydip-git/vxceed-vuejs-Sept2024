<template>
  <h2>All Posts</h2>
  <br />
  <table>
    <thead>
      <tr>
        <th>Post ID</th>
        <th>Post Title</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="p of postlist"
        :key="p.id">
        <PostDetailOptionsAPI :post="p" />
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import { ref } from "vue";
  import { posts } from "../data/posts";
  import PostDetailOptionsAPI from "./PostDetailOptionsAPI.vue";

  const postlist = ref(posts);
</script>
