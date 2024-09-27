<script setup>
  //   const props =defineProps({
  //     name: {
  //       type: String,
  //       default: "",
  //       required: true,
  //     },
  //   });
  // const name = ref(props.name)

  //   defineEmits(["update:name"]);
  const name = defineModel("name", {
    type: String,
    default: 0,
    required: true,
  });
</script>
<template>
  <h2>defineModel component</h2>
  <div>
    <label for="txtName">Name: &nbsp;</label>
    <!-- <input
      type="text"
      id="txtName"
      :value="name"
      @input="($event) => $emit('update:name', $event.target.value)" /> -->
    <input
      type="text"
      id="txtName"
      v-model="name" />
  </div>
</template>
