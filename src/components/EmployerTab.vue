<template>
  <div id="EmployerTab">
    <h2>Employer's tab</h2>
    <form>
      <h4>What's the maximum you are willing to pay?
        <br>
        <br>
      </h4>
      <h3>
        <span v-if="employerOfferFromProps">{{ employerOfferFromProps }}€</span>
      </h3>
      <div v-if="showEmployerInput">
        <input type="number" v-model="employerInputOffer" @focus="$event.target.select()">
        <br>
        <br>
        <button
          class="btn-submit"
          type="submit"
          v-on:click="$emit('employer-submitted-offer', employerInputOffer)"
        >Submit</button>
      </div>
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

<style>
input {
  text-align: center;
}
</style>
