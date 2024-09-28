<template>
  <h2>State Management Using Pinia</h2>
  <br />
  <span>Value: &nbsp;{{ counterValue }}</span>
  <br />
  <span>Counter Double: &nbsp;{{ doublecounter }}</span>
  <br />
  <button
    type="button"
    @click="increaseCounterValue">
    Increase
  </button>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button
    type="button"
    @click="deccreaseCounterValue">
    Decrease
  </button>
</template>

<!--
<script>
  import { mapActions, mapState } from "pinia";
  import { counterStore } from "./storage/counterstore";
  // const mappedComputedPropsObject = mapState(counterStore, [
  //   "counter",
  //   "doubleUpCounter",
  // ]);
  const mappedComputedPropsObject = mapState(counterStore, {
    counterValue: "counter",
    doublecounter: "doubleUpCounter",
  });
  // const mappedActionsToMethods = mapActions(counterStore,["increase","decrease"])
  const mappedActionsToMethods = mapActions(counterStore, {
    increaseCounterValue: "increase",
    deccreaseCounterValue: "decrease",
  });
  export default {
    computed: {
      // counter() {
      //   return counterStore().counter;
      // },
      ...mappedComputedPropsObject,
      //...mapState(counterStore, [
      //   "counter",
      //   "doubleUpCounter",
      // ]);
      // ...mapState(counterStore, {
      //   counterValue: "counter",
      //   doublecounter: "doubleUpCounter",
      // }),
    },
    methods: {
      // inccreaseCounterValue() {
      //   counterStore().increase();
      // },
      // deccreaseCounterValue() {
      //   counterStore().decrease();
      // },
      ...mappedActionsToMethods,
    },
  };
</script>
-->

<script setup>
  //import { computed } from "vue";
  import { computed } from "vue";
  import { counterStore } from "./storage/counterstore";
  import { storeToRefs } from "pinia";

  const store = counterStore();

  //manually creating computed properties for every state and getter in the store
  //const counterValue = computed(() => store.counter);

  //using storeToRefs
  //similar to mapState
  //storeToRefs create the following object, which is combination of
  //state properties and computed properties (NOT actions), mapped to several computed properties in the component
  // {
  //  counter: computed(() => store.counter),
  //  doubleUpCounter: computed(() => store.doubleUpCounter)
  // }
  const { counter: counterValue, doubleUpCounter: doublecounter } =
    storeToRefs(store);

  const { increase: increaseCounterValue, decrease: deccreaseCounterValue } =
    store;
</script>
