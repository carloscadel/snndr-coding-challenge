<template>
  <div id="home">
    <div>
      <button class="btn-tab employee" v-on:click="tabSwap('employee')">Employee Tab</button>
      <button class="btn-tab employer" v-on:click="tabSwap('employer')">Employer Tab</button>
      <EmployeeTab
        v-if="showEmployeeTab"
        :employeeOfferFromProps="parseInt(employeeOffer)"
        v-on:employee-submitted-offer="employeeSubmittedOffer"
        :showEmployeeInput="showEmployeeInput"
      ></EmployeeTab>
      <EmployerTab
        v-if="showEmployerTab"
        :employerOfferFromProps="parseInt(employerOffer)"
        v-on:employer-submitted-offer="employerSubmittedOffer"
        :showEmployerInput="showEmployerInput"
      ></EmployerTab>
      <Modal
        v-if="showModal"
        :headerMessage="modalHeaderMessage"
        :employeeOffer="employeeOffer"
        :employerOffer="employerOffer"
      ></Modal>
    </div>
  </div>
</template>

<script>
import EmployeeTab from "@/components/EmployeeTab.vue";
import EmployerTab from "@/components/EmployerTab.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
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
      employeeOffer: null,
      employerOffer: null,
      showModal: false,
      modalHeaderMessage: ""
    };
  },
  methods: {
    tabSwap(tab) {
      if (tab === "employee") {
        this.showEmployeeTab = true;
        this.showEmployerTab = false;
      } else {
        this.showEmployerTab = true;
        this.showEmployeeTab = false;
      }
    },
    employeeSubmittedOffer(offer) {
      this.employeeOffer = offer;
      this.showEmployeeInput = false;
      this.checkSuccess();
    },
    employerSubmittedOffer(offer) {
      this.employerOffer = offer;
      this.showEmployerInput = false;
      this.checkSuccess();
    },
    checkSuccess() {
      if (this.employeeOffer !== null && this.employerOffer !== null) {
        if (this.employeeOffer < this.employerOffer) {
          this.modalHeaderMessage = "Success!";
        } else {
          this.modalHeaderMessage = "Failure!";
        }
        setTimeout(() => {
          this.showModal = true;
        }, 250);
      }
    }
  }
};
</script>

<style>
#home {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 500px;
  height: 270px;
  padding: 20px;
}
.btn-tab {
  width: 50%;
}
.btn-tab .employee {
  background-color: hsl(300, 50%, 50%);
}
input {
  text-align: center;
  padding: 5px 20px;
  width: 150px;
  font-size: 1em;
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}
input:focus {
  outline: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}
.btn-submit {
  background-color: hsl(0, 79%, 72%);
  padding: 5px 20px;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 0.8em;
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.1s;
}
</style>
