<template>
  <div v-if="isFetchOver">
    <div v-if="errorInfo === ''">
      <div v-if="postInfo">
        <table>
          <tbody>
            <tr>
              <td>Id: &nbsp;</td>
              <td>{{ postInfo.id }}</td>
            </tr>
            <tr>
              <td>User Id: &nbsp;</td>
              <td>{{ postInfo.userId }}</td>
            </tr>
            <tr>
              <td>Title: &nbsp;</td>
              <td>{{ postInfo.title }}</td>
            </tr>
            <tr>
              <td>Body: &nbsp;</td>
              <td>{{ postInfo.body }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <span>No record</span>
      </div>
    </div>
    <div v-else>
      {{ errorInfo }}
    </div>
  </div>
  <div v-else>
    <span>Loading...</span>
  </div>
</template>

<script>
  export default {
    //selected post id will not be passed via props from PostList component
    // props: {
    //   selectedId: {
    //     type: Number,
    //     required: true,
    //   },
    // },
    //inject: ["selectedId"],
    //or
    inject: {
      //creating local data selectedId and assigning the value from injected key 'selectedId'
      selectedId: {
        from: "selectedId",
      },
    },
    data() {
      return {
        isFetchOver: false,
        errorInfo: "",
        postInfo: null,
      };
    },
    methods: {
      async fetchPostById() {
        try {
          //passing the injected selected id to fetch() api
          const resp = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${this.selectedId}`
          );
          this.postInfo = await resp.json();
          this.errorInfo = "";
          this.isFetchOver = true;
        } catch (error) {
          this.postInfo = null;
          this.errorInfo = error.message;
          this.isFetchOver = true;
        }
      },
    },
    mounted() {
      this.fetchPostById();
    },
    watch: {
      selectedId(newValue, oldValue) {
        console.log(newValue, oldValue);
        //if (newValue !== oldValue) {
        this.fetchPostById();
        //}
      },
    },
    // beforeUpdate() {
    //   this.fetchPostById();
    // },
  };
</script>
