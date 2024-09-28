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
                @delete-post="deletePostFromArray"
                @post-id-selected="
                  (value) => commonStore.updateSelectedId(value)
                " />
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
  <br />
  <br />
  <div v-if="selectedPostId > 0">
    <PostDetailCompositionAPI />
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import PostRowCompositionAPI from "./PostRowCompositionAPI.vue";
  import { usePostsStore } from "@/storage/usepostsstore";
  import { useCommonStore } from "@/storage/usecommonstore";
  import { storeToRefs } from "pinia";
  import PostDetailCompositionAPI from "./PostDetailCompositionAPI.vue";

  const store = usePostsStore();
  const { errorInfo, postlist, isFetchOver } = storeToRefs(store);

  const commonStore = useCommonStore();
  const { selectedId: selectedPostId } = storeToRefs(commonStore);

  const deletePostFromArray = (id) => {
    const index = postlist.value.findIndex((p) => p.id === id);
    if (index >= 0) {
      postlist.value.splice(index, 1);
    }
  };

  onMounted(() => store.fetchPosts());
</script>
