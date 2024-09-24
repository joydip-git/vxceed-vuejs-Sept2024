<template>
  <h2>Composition API</h2>
  <div>
    HelloWorld Component
    <br />
    <span>Counter Value: {{ counter }}</span>
    <br />
    <button
      type="button"
      @click="increase">
      Increase
    </button>
  </div>
</template>

<script>
  import { ref } from "vue";

  export default {
    setup: function () {
      const counter = ref(0);
      const increase = () => counter.value++;

      return {
        counter,
        increase,
      };
    },
  };
</script>

<style scoped></style>
