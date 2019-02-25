<template>
  <div id="EmployerTab">
    <h2>Employer's tab</h2>
    <h4>What's the maximum salary you are willing to pay?
      <br>
      <br>
    </h4>
    <h3>
      <span v-if="employerOfferFromProps">{{ employerOfferFromProps }}€</span>
    </h3>
    <form v-if="showEmployerInput">
      <input
        type="number"
        placeholder="Make an offer..."
        v-bind:class="{ flashIn: isFlashIn, flashOut: isFlashOut }"
        v-model="employerInputOffer"
        @focus="$event.target.select()"
      >
      <br>
      <br>
      <button
        class="btn-submit"
        type="submit"
        v-on:click="$emit('employer-submitted-offer', employerInputOffer)"
      >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EmployerTab",
  props: {
    employerOfferFromProps: String,
    showEmployerInput: Boolean,
    isFlashIn: Boolean,
    isFlashOut: Boolean
  },
  data() {
    return {
      employerInputOffer: ""
    };
  }
};
</script>

<style>
input {
  text-align: center;
}
</style>
