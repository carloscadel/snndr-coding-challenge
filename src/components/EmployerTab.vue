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
    <form>
      <div v-if="showEmployerInput">
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
          @click="$emit('employer-submitted-offer', employerInputOffer)"
        >Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable
export default {
  name: "EmployerTab",
  props: {
    employerOfferFromProps: Number,
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
