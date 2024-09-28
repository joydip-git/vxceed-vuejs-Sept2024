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
  import { usePostStore } from "@/storage/usepoststore";
  import { mapActions, mapState } from "pinia";

  export default {
    props: {
      selectedId: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    computed: {
      ...mapState(usePostStore, ["errorInfo", "isFetchOver", "postInfo"]),
    },
    methods: {
      ...mapActions(usePostStore, ["fetchPostById"]),
    },
    mounted() {
      this.fetchPostById(this.$props.selectedId);
    },
    // watch: {
    //   selectedId(newValue, oldValue) {
    //     console.log(newValue, oldValue);
    //     this.fetchPostById(this.$props.selectedId);
    //   },
    // },
    watch: {
      selectedId: {
        handler: function (newValue, oldValue) {
          console.log(newValue, oldValue);
          this.fetchPostById(this.$props.selectedId);
        },
        lazy: false,
      },
    },
  };
</script>
