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
              <PostRowOptionsAPI
                :post="p"
                @delete-post="deletePostFromArray"
                @post-id-selected="(value) => (selectedPostId = value)" />
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
  <!-- <div v-if="selectedPostId > 0">
    <PostDetailOptionsAPI :selected-id="selectedPostId" />
  </div> -->
</template>

<script>
  //import PostDetailOptionsAPI from "./PostDetailOptionsAPI.vue";
  import PostRowOptionsAPI from "./PostRowOptionsAPI.vue";
  import { usePostsStore } from "../storage/usepostsstore";
  import { mapState, mapActions } from "pinia";

  export default {
    components: {
      PostRowOptionsAPI,
      //PostDetailOptionsAPI,
    },
    // data() {
    //   return {
    //     selectedPostId: 0,
    //   };
    // },
    computed: {
      ...mapState(usePostsStore, ["errorInfo", "isFetchOver", "postlist"]),
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
      ...mapActions(usePostsStore, ["fetchPosts"]),
    },
    mounted() {
      this.fetchPosts();
    },
  };
</script>
