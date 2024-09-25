<template>
  <h2>Composition API</h2>
  <br />
  Name: &nbsp; <span>{{ name }}</span>
  <br />
  Name: &nbsp;
  <input
    type="text"
    :value="name"
    @input="updateName($event.target.value)" />
  <br /><br />
  <div>
    <span>Counter Value: &nbsp;{{ counterObj.counter }}</span>
    <br />
    <button
      type="button"
      @click="increase">
      Increase
    </button>
  </div>
</template>

<script>
  import { reactive, ref } from "vue";

  export default {
    setup() {
      //const name = "anil";
      const name = ref("anil"); //{value:'anil'}
      const counterObj = reactive({ counter: 0 });

      const updateName = (newName) => (name.value = newName);
      const increase = () => counterObj.counter++;

      return {
        name,
        counterObj,
        updateName,
        increase,
      };
    },
  };
</script>

<style scoped></style>
