<template>
  <h2>Options API</h2>
  <br />
  Name: &nbsp; <span>{{ name }}</span>
  <br />
  Name: &nbsp;
  <input
    type="text"
    :value="name"
    v-on:input="($event) => updateName($event.target.value)" />
</template>

<script>
  export default {
    data() {
      return {
        name: "anil",
      };
    },
    methods: {
      updateName(newName) {
        //console.log(eventObj);
        this.name = newName;
      },
    },
  };
</script>

<style scoped></style>
