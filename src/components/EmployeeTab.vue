<template>
  <div id="EmployeeTab">
    <h2>Employee's tab</h2>
    <form>
      <h4>What's the minimum you would expect to be paid?
        <br>
        <br>
      </h4>
      <h3>
        <span v-if="employeeOfferFromProps">{{ employeeOfferFromProps }}€</span>
      </h3>
      <div v-if="showEmployeeInput">
        <input type="number" v-model="employeeInputOffer" @focus="$event.target.select()">
        <br>
        <br>
        <button
          class="btn-submit"
          type="submit"
          v-on:click="$emit('employee-submitted-offer', employeeInputOffer)"
        >Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EmployeeTab",
  props: {
    employeeOfferFromProps: Number,
    showEmployeeInput: Boolean
  },
  data() {
    return {
      employeeInputOffer: 0
    };
  }
};
</script>

<style>
</style>
