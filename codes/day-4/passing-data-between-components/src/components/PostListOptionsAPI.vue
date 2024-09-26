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

<script>
  import { posts } from "../data/posts";
  import PostDetailOptionsAPI from "./PostDetailOptionsAPI.vue";

  export default {
    components: {
      PostDetailOptionsAPI,
    },
    data() {
      return {
        postlist: posts,
      };
    },
    methods: {
      deletePostFromArray(id) {
        console.log("parent method called");
        alert("calling..." + id);
        const index = this.postlist.findIndex((p) => p.id === id);
        if (index >= 0) {
          this.postlist.splice(index, 1);
        }
      },
    },
  };
</script>
