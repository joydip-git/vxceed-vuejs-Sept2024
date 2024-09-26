<template>
  <div class="col-md-4">
    <label for="txtFilter">Filter By: &nbsp;</label>
    <input
      type="text"
      id="txtFilter"
      :value="filterText"
      @input="($event) => $emit('filterTextChanged', $event.target.value)" />
  </div>
</template>

<!--options api-->
<!-- <script>
  export default {
    data() {
      return {
        filterText: "",
      };
    },
    emits: ["filterTextChanged"],
  };
</script> -->

<!-- composition api -->
<script setup>
  import { ref } from "vue";

  defineEmits(["filterTextChanged"]);
  const filterText = ref("");
</script>
