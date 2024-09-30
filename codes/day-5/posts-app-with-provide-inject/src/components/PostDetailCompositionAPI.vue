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
  import { inject, onMounted, ref, watchEffect } from "vue";

  const postInfo = ref(null);
  const errorInfo = ref("");
  const isFetchOver = ref(false);
  /*
  const props = defineProps({
    selectedId: {
      type: Number,
      required: true,
    },
  });
  */

  //here selectedId is a computed ref object, hence extract the value using selectedId.value
  const selectedId = inject("selecedId");
  const fetchPostById = async () => {
    try {
      // const resp = await fetch(
      //   `https://jsonplaceholder.typicode.com/posts/${props.selectedId}`
      // );
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${selectedId.value}`
      );
      postInfo.value = await resp.json();
      errorInfo.value = "";
      isFetchOver.value = true;
    } catch (error) {
      postInfo.value = null;
      errorInfo.value = error.message;
      isFetchOver.value = true;
    }
  };
  onMounted(() => fetchPostById());
  watchEffect(() => fetchPostById());
</script>
