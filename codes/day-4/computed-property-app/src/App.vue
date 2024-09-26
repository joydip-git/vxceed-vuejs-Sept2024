<template>
  <h2>Computed Property - Options API</h2>
  <div>
    <span>Counter:&nbsp;{{ counter }}</span>
    <br />
    <span>Derived Counter: &nbsp; {{ doubleUpCounter }}</span>
  </div>
  <br />
  <button
    type="button"
    @click="increase">
    Increase
  </button>
  <br />
  <br />
  <div>
    <input
      type="text"
      :value="name"
      @input="($event) => (name = $event.target.value)" />
  </div>
  <br />
  <!-- <input
    type="text"
    :value="filterText"
    @input="($event) => (filterText = $event.target.value)" /> -->
  <input
    type="text"
    v-model="filterText" />
  <br />
  <ul>
    <li
      v-for="name of filterNames"
      :key="name">
      {{ name }}
    </li>
  </ul>
</template>

<!-- 
<script>
  export default {
    data() {
      return {
        counter: 0,
        name: "",
        names: ["anil", "sunil", "joydip"],
        filterText: "",
      };
    },
    methods: {
      increase() {
        this.counter++;
      },
      // filterNames(filterText) {
      //   this.names = this.names.filter((n) =>
      //     n.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
      //   );
      // },
    },
    computed: {
      doubleUpCounter() {
        console.log("called...");
        return this.counter * 2;
      },
      filterNames() {
        if (this.filterText !== "") {
          return this.names.filter((n) =>
            n.toLocaleLowerCase().includes(this.filterText.toLocaleLowerCase())
          );
        } else return this.names;
      },
    },
  };
</script> -->

<script setup>
  import { computed, ref } from "vue";
  const counter = ref(0);
  const name = ref("");
  const names = ref(["anil", "sunil", "joydip"]);
  const filterText = ref("");

  const doubleUpCounter = computed(() => counter.value * 2);
  const filterNames = computed(() => {
    if (filterText.value !== "") {
      return names.value.filter((n) =>
        n.toLocaleLowerCase().includes(filterText.value.toLocaleLowerCase())
      );
    } else return names.value;
  });
</script>
