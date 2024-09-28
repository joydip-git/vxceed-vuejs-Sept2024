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
    props: {
      selectedId: {
        type: Number,
        required: true,
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
          const resp = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${this.$props.selectedId}`
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
