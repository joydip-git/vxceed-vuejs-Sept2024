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

<script setup>
  import { usePostStore } from "@/storage/usepoststore";
  import { storeToRefs } from "pinia";
  import { onMounted, watchEffect } from "vue";

  const store = usePostStore();
  const { postInfo, errorInfo, isFetchOver } = storeToRefs(store);
  const props = defineProps({
    selectedId: {
      type: Number,
      required: true,
    },
  });
  onMounted(() => store.fetchPostById(props.selectedId));
  //incorrect code: because "watch" method here can be used to watch the following: state (created ussing ref() or reactive() method), computed properties (created using computed() method) and execute a side-effect causing code
  //watch(props.selectedId, () => store.fetchPostById(props.selectedId));

  //if you want to watch anything else (such as props) and as a result want a side-effect causing code to be executed, use "watchEffect"
  watchEffect(() => store.fetchPostById(props.selectedId));
</script>
