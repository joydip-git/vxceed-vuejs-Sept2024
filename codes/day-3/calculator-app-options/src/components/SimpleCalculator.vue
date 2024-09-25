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
          @change="updateSelection(1)" />
        &nbsp;&nbsp;
        <label for="radioSub">Subtract:&nbsp;</label>
        &nbsp;<input
          type="radio"
          name="calcRadios"
          id="radioSub"
          value="Subtract"
          @change="updateSelection(2)" />
        &nbsp;&nbsp;
        <label for="radioMulti">Multiply:&nbsp;</label>
        &nbsp;<input
          type="radio"
          name="calcRadios"
          id="radioMulti"
          value="Multiply"
          @change="updateSelection(3)" />
        &nbsp;&nbsp;
        <label for="radioDiv">Divide:&nbsp;</label>
        &nbsp;<input
          type="radio"
          name="calcRadios"
          id="radioDiv"
          value="Divide"
          @change="updateSelection(4)" />
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

<script>
  export default {
    data() {
      return {
        selectedChoice: 0,
        first: 0,
        second: 0,
        result: 0,
      };
    },
    methods: {
      updateSelection(choice) {
        this.selectedChoice = choice;
      },
      calculate() {
        switch (this.selectedChoice) {
          case 1:
            this.result = this.first + this.second;
            break;

          case 2:
            this.result = this.first - this.second;
            break;

          case 3:
            this.result = this.first * this.second;
            break;

          case 4:
            this.result = this.first / this.second;
            break;

          default:
            break;
        }
      },
    },
  };
</script>
