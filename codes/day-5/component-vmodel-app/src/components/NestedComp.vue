<template>
  <h2>Nested Component</h2>
  <div>
    <label for="txtName">Name: &nbsp;</label>
    <input
      type="text"
      id="txtName"
      :value="$props.modelValue"
      @input="($event) => $emit('update:modelValue', $event.target.value)" />
    <!-- <input
      type="text"
      id="txtName"
      :value="nameValue"
      @update:value="($event) => $emit('update:value', $event.target.value)" /> -->
    Name:&nbsp;
    <input
      type="text"
      id="txtName"
      v-model="nameValue" />
  </div>
  <div>
    <span>Counter:&nbsp;{{ passedCounter }}</span>
    <br />
    <button
      type="button"
      @click="$emit('update:counter', passedCounter++)">
      Increase
    </button>
  </div>
</template>

<!--
<script>
  export default {
    props: {
      modelValue: {
        type: String,
        default: "",
        required: true,
      },
      counter: {
        type: Number,
        default: 0,
        required: true,
      },
    },
    emits: ["update:modelValue", "update:counter"],
    data() {
      return {
        passedCounter: this.$props.counter,
        nameValue: this.$props.modelValue,
      };
    },
  };
</script>
-->
<script setup>
  import { ref } from "vue";

  const props = defineProps({
    modelValue: {
      type: String,
      default: "",
      required: true,
    },
    counter: {
      type: Number,
      default: 0,
      required: true,
    },
  });

  defineEmits(["update:modelValue", "update:counter"]);

  const passedCounter = ref(props.counter);
  const nameValue = ref(props.modelValue);
</script>
