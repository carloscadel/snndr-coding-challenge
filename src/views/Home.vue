<template>
  <div id="home">
    <button v-on:click="tabSwap('employee')">Employee Tab</button>
    <button v-on:click="tabSwap('employer')">Employer Tab</button>
    <EmployeeTab v-if="showEmployeeTab" :employeeOfferFromProps="parseInt(employeeOffer)" v-on:employee-submitted-offer="employeeSubmittedOffer" :showEmployeeInput="showEmployeeInput"></EmployeeTab>
    <EmployerTab v-if="showEmployerTab" :employerOfferFromProps="parseInt(employerOffer)" v-on:employer-submitted-offer="employerSubmittedOffer" :showEmployerInput="showEmployerInput"></EmployerTab>
    <Modal v-if="showModal" :headerMessage="modalHeaderMessage" :employeeOffer="employeeOffer" :employerOffer="employerOffer"></Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import EmployeeTab from '@/components/EmployeeTab.vue'
import EmployerTab from '@/components/EmployerTab.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Home',
  components: {
    EmployeeTab,
    EmployerTab,
    Modal
  },
  data() {
    return {
      showEmployeeTab: true,
      showEmployeeInput: true,
      showEmployerTab: false,
      showEmployerInput: true,
      employeeOffer: 0,
      employerOffer: 0,
      showModal: false,
      modalHeaderMessage: ''
    }
  },
  methods: {
    tabSwap(tab) {
      if (tab === 'employee') {
        this.showEmployeeTab = true
        this.showEmployerTab = false
      } else {
        this.showEmployerTab = true
        this.showEmployeeTab = false
      }
    },
    employeeSubmittedOffer(offer) {
      this.employeeOffer = offer
      this.showEmployeeInput = false
      this.checkSuccess()
    },
    employerSubmittedOffer(offer) {
      this.employerOffer = offer
      this.showEmployerInput = false
      this.checkSuccess()
    },
    checkSuccess() {
      if (this.employeeOffer !== 0 && this.employerOffer !== 0) {
        if (this.employeeOffer < this.employerOffer) {
          this.modalHeaderMessage = 'Success!'
        } else {
          this.modalHeaderMessage = 'Failure!'
        }
        this.showModal = true
      }
    }
  }
}
</script>
