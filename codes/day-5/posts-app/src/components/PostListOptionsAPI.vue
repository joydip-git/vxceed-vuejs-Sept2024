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
  <div v-if="selectedPostId > 0">
    <PostDetailOptionsAPI :selected-id="selectedPostId" />
  </div>
</template>

<script>
  import PostDetailOptionsAPI from "./PostDetailOptionsAPI.vue";
  import PostRowOptionsAPI from "./PostRowOptionsAPI.vue";

  export default {
    components: {
      PostRowOptionsAPI,
      PostDetailOptionsAPI,
    },
    data() {
      return {
        isFetchOver: false,
        errorInfo: "",
        postlist: [],
        selectedPostId: 0,
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
      async fetchPosts() {
        // fetch({
        //   url: "https://jsonplaceholder.typicode.com/posts",
        //   method: "GET",
        // });
        try {
          const resp = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const allPosts = await resp.json();
          this.postlist = allPosts.slice(0, 5);
          this.errorInfo = "";
          this.isFetchOver = true;
        } catch (error) {
          this.postlist = [];
          this.errorInfo = error.message;
          this.isFetchOver = true;
        }
      },
    },
    mounted() {
      //setTimeout(() => this.fetchPosts(), 2000);
      this.fetchPosts();
    },
  };
</script>
