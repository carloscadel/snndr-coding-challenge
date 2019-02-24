<template>
  <div id="EmployerTab">
    <h1>Employer's tab</h1>
    <form>
      <h2>What's the maximum you are willing to pay?
        <br>
        {{ employerOfferFromProps }}€
      </h2>
      <div v-if="showEmployerInput">
        <input type="number" v-model="employerInputOffer" @focus="$event.target.select()">
      </div>
      <button
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
    employerOfferFromProps: Number,
    showEmployerInput: Boolean
  },
  data() {
    return {
      employerInputOffer: 0
    };
  }
};
</script>
