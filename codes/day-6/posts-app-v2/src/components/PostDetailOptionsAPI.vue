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
  import { useCommonStore } from "../storage/usecommonstore";
  import { mapActions, mapState } from "pinia";

  export default {
    computed: {
      ...mapState(usePostStore, ["errorInfo", "isFetchOver", "postInfo"]),
      ...mapState(useCommonStore, ["selectedId"]),
    },
    methods: {
      ...mapActions(usePostStore, ["fetchPostById"]),
    },
    mounted() {
      this.fetchPostById(this.selectedId);
    },
    watch: {
      selectedId: {
        handler: function (newValue, oldValue) {
          console.log(newValue, oldValue);
          this.fetchPostById(this.selectedId);
        },
        lazy: false,
      },
    },
  };
</script>
