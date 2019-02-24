<template>
  <div id="EmployeeTab">
    <h1>Employee's tab</h1>
    <form>
      <h2>What's the minimum you would expect to be paid?
        <br>
        {{ employeeOfferFromProps }}€
      </h2>
      <div v-if="showEmployeeInput">
        <input type="number" v-model="employeeInputOffer" @focus="$event.target.select()">
      </div>
      <button
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
