<template>
  <h2>Nesting in Options API</h2>
  <br />
  <NestedComponent />
</template>

<!-- composition api components do not need to use "components" option to register a compoennt separately -->
<script setup>
  import NestedComponent from "./components/NestedComponent.vue";
</script>

<!-- options api components needed to be registered using "components" option -->
<!-- <script>
  import NestedComponent from "./components/NestedComponent.vue";

  export default {
    components: {
      NestedComponent,
    },
  };
</script> -->
