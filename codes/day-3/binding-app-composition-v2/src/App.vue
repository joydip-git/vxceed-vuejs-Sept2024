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
  <br />
  Name: &nbsp;
  <input
    type="text"
    v-model="name" />
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
  <br /><br />
  <div>
    <input
      type="radio"
      name="radios"
      id="radioAdd"
      v-model="radio"
      value="add" />
    &nbsp;Add &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input
      type="radio"
      name="radios"
      id="radioSub"
      v-model="radio"
      value="subtract" />
    &nbsp;Subtract
  </div>
  <br />
  <span>Which radio button was checked? &nbsp;{{ radio }}</span>
</template>

<script setup>
  import { reactive, ref } from "vue";

  //const name = "anil";
  const name = ref("anil"); //{value:'anil'}
  const counterObj = reactive({ counter: 0 });
  const radio = ref("add");
  console.log(radio);
  const updateName = (newName) => (name.value = newName);
  const increase = () => counterObj.counter++;
</script>

<style scoped></style>
