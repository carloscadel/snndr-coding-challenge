<template>
  <div id="EmployeeTab">
    <h2>Employee's tab</h2>
    <h4>What's the minimum salary you would accept?
      <br>
      <br>
    </h4>
    <h3>
      <span v-if="employeeOfferFromProps">{{ employeeOfferFromProps }}€</span>
    </h3>
    <form>
      <div v-if="showEmployeeInput">
        <input
          type="number"
          placeholder="Make an offer..."
          v-bind:class="{ flashIn: isFlashIn, flashOut: isFlashOut }"
          v-model="employeeInputOffer"
          @focus="$event.target.select()"
        >
        <br>
        <br>
        <button
          class="btn-submit"
          type="submit"
          @click="$emit('employee-submitted-offer', employeeInputOffer)"
        >Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable
export default {
  name: "EmployeeTab",
  props: {
    employeeOfferFromProps: Number,
    showEmployeeInput: Boolean,
    isFlashIn: Boolean,
    isFlashOut: Boolean
  },
  data() {
    return {
      employeeInputOffer: ""
    };
  }
};
</script>