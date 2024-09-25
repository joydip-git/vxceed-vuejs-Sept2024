<template>
  <form>
    <fieldset>
      <legend>Calculator</legend>
      <div>
        <label for="radioAdd">Add:&nbsp;</label>
        &nbsp;<input
          type="radio"
          name="calcRadios"
          id="radioAdd"
          value="Add"
          v-model="selectedRadio" />
        &nbsp;&nbsp;
        <label for="radioSub">Subtract:&nbsp;</label>
        &nbsp;<input
          type="radio"
          name="calcRadios"
          id="radioSub"
          value="Subtract"
          v-model="selectedRadio" />
        &nbsp;&nbsp;
        <label for="radioMulti">Multiply:&nbsp;</label>
        &nbsp;<input
          type="radio"
          name="calcRadios"
          id="radioMulti"
          value="Multiply"
          v-model="selectedRadio" />
        &nbsp;&nbsp;
        <label for="radioDiv">Divide:&nbsp;</label>
        &nbsp;<input
          type="radio"
          name="calcRadios"
          id="radioDiv"
          value="Divide"
          v-model="selectedRadio" />
      </div>
      <div>
        <label for="txtFirst">First:&nbsp;</label>
        <input
          type="text"
          id="txtFirst"
          v-model.number="first" />
      </div>
      <div>
        <label for="txtSecond">Second:&nbsp;</label>
        <input
          type="text"
          id="txtSecond"
          v-model.number="second" />
      </div>
      <div>
        <button
          type="button"
          @click="calculate">
          Calculate
        </button>
      </div>
      <div>
        <label for="txtFirst">Result:&nbsp;</label>
        <input
          type="text"
          id="txtResult"
          :value="result"
          readonly />
      </div>
    </fieldset>
  </form>
</template>

<script setup>
  import { ref } from "vue";

  const selectedRadio = ref("");
  const first = ref(0);
  const second = ref(0);
  const result = ref(0);

  const calculate = () => {
    switch (selectedRadio.value) {
      case "Add":
        result.value = first.value + second.value;
        break;

      case "Subtract":
        result.value = first.value - second.value;
        break;

      case "Multiply":
        result.value = first.value * second.value;
        break;

      case "Divide":
        result.value = first.value / second.value;
        break;

      default:
        break;
    }
  };
</script>
