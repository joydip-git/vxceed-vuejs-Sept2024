<template>
  <span>Welcome to Vue JS</span>
  <br />
  <span>Counter:{{ counter }}</span>
  <br />
  <br />
  <div>
    <label for="">Counter Value: &nbsp;</label>
    <!-- <input
      type="text"
      v-bind:value="counter" /> -->
    <input
      type="text"
      :value="counter" />
  </div>
  <br />
  <button
    type="button"
    @click="increase">
    Increase
  </button>
  <br />
  <br />
  <br />
  <!-- <HelloWorld /> -->
  <app-hello-world></app-hello-world>
</template>

<script>
  //import HelloWorld from "./components/HelloWorld.vue";

  export default {
    data: function () {
      return {
        counter: 0,
      };
    },
    methods: {
      increase() {
        this.counter++;
      },
    },
  };
</script>

<style scoped>
  span {
    background-color: burlywood;
  }
  span,
  div {
    font-family: "Courier New", Courier, monospace;
  }
  button {
    border: 1px solid blueviolet;
    background-color: blueviolet;
    border-radius: 5px;
    font-size: medium;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    padding: 5px;
    margin: 5px;
    color: white;
  }
</style>
