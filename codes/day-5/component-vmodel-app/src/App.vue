<template>
  <h2>Parent Component</h2>
  <br />
  <span>Name: &nbsp;{{ name }}</span>
  <br />
  <br />
  <!-- <NestedComp
    :model-value="name"
    @update:model-value="(value) => (name = value)" 
    v-model:model-value="name"
    :counter="count"
    @update:counter="count++"
    /> -->
  <NestedComp
    v-model="name"
    v-model:counter="count" />
  <br />
  <br />
  <br />
  <ModelNestedComp
    :name="name"
    @update:name="(value) => (name = value)" />
  <br />
  <br />
  <ModelNestedComp v-model:name="name" />
</template>

<!-- 
<script>
  import NestedComp from "./components/NestedComp.vue";

  export default {
    components: {
      NestedComp,
    },
    data() {
      return {
        name: "anil",
        count: 0,
      };
    },
  };
</script>
-->

<script setup>
  import { ref } from "vue";
  import NestedComp from "./components/NestedComp.vue";
  import ModelNestedComp from "./components/ModelNestedComp.vue";

  const name = ref("anil");
  const count = ref(0);
</script>
