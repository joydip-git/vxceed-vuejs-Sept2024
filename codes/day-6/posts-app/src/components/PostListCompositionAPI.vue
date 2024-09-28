<template>
  <div v-if="isFetchOver">
    <div v-if="errorInfo === ''">
      <div v-if="postlist.length > 0">
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
              <PostRowCompositionAPI
                :post="p"
                @delete-post="deletePostFromArray" />
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <span>No records...</span>
      </div>
    </div>
    <div v-else>
      <span>{{ errorInfo }}</span>
    </div>
  </div>
  <div v-else>
    <span>Loading...</span>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import PostRowCompositionAPI from "./PostRowCompositionAPI.vue";

  const postlist = ref([]);
  const errorInfo = ref("");
  const isFetchOver = ref(false);

  const deletePostFromArray = (id) => {
    const index = postlist.value.findIndex((p) => p.id === id);
    if (index >= 0) {
      postlist.value.splice(index, 1);
    }
  };
  const fetchPosts = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const allPosts = await resp.json();
      postlist.value = allPosts.slice(0, 5);
      errorInfo.value = "";
      isFetchOver.value = true;
    } catch (error) {
      postlist.value = [];
      errorInfo.value = error.message;
      isFetchOver.value = true;
    }
  };
  onMounted(() => fetchPosts());
</script>
