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
    <form v-if="showEmployeeInput">
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
        v-on:click="$emit('employee-submitted-offer', employeeInputOffer)"
      >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EmployeeTab",
  props: {
    employeeOfferFromProps: String,
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

<style>
</style>
