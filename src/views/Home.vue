// eslint-disable
<template>
  <div id="home">
    <div class="card-container">
      <div class="tab-btn-container">
        <button
          class="btn-tab employee"
          v-bind:class="{ activeTab: showEmployeeTab }"
          @click="tabSwap('employee')"
        >Employee's Tab</button>
        <button
          class="btn-tab employer"
          v-bind:class="{ activeTab: showEmployerTab }"
          @click="tabSwap('employer')"
          >Employer's Tab
        </button>
      </div>
      <div>
        <EmployeeTab
          v-if="showEmployeeTab"
          :employeeOfferFromProps="employeeOffer"
          @employee-submitted-offer="employeeSubmittedOffer"
          :showEmployeeInput="showEmployeeInput"
          :isFlashIn="isFlashIn"
          :isFlashOut="isFlashOut"
        ></EmployeeTab>
        <EmployerTab
          v-if="showEmployerTab"
          :employerOfferFromProps="employerOffer"
          @employer-submitted-offer="employerSubmittedOffer"
          :showEmployerInput="showEmployerInput"
          :isFlashIn="isFlashIn"
          :isFlashOut="isFlashOut"
        ></EmployerTab>
      </div>
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
      modalHeaderMessage: "",
      isFlashIn: false,
      isFlashOut: true
    };
  },
  methods: {
    tabSwap(tab) {
      if (tab === "employee") {
        this.showEmployeeTab = true;
        this.showEmployerTab = false;
      } else {
        this.showEmployeeTab = false;
        this.showEmployerTab = true;
      }
    },
    flash() {
      this.isFlashIn = true;
      this.isFlashOut = false;
      setTimeout(() => {
        this.isFlashIn = false;
        this.isFlashOut = true;
      }, 250);
      return "flash";
    },
    employeeSubmittedOffer(offer) {
      if (offer < 0 || offer === "" || offer === null) {
        this.flash();
        return "invalid offer";
      }
      this.employeeOffer = Math.round(offer);
      this.showEmployeeInput = false;
      this.checkSuccess();
    },
    employerSubmittedOffer(offer) {
      if (offer < 0 || offer === "" || offer === null) {
        this.flash();
        return "invalid offer";
      }
      this.employerOffer = Math.round(offer);
      this.showEmployerInput = false;
      this.checkSuccess();
    },
    checkSuccess() {
      if (this.employeeOffer !== null && this.employerOffer !== null) {
        if (this.employeeOffer <= this.employerOffer) {
          this.modalHeaderMessage = "Success!";
        } else {
          this.modalHeaderMessage = "Failure!";
        }
        this.showModal = true;
      }
    }
  }
};
</script>

<style>
#home {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
  width: 500px;
  height: 270px;
  padding: 20px;
}
.btn-tab {
  width: 48%;
  margin: 2px;
  padding: 5px 20px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  outline: none;
  color: rgba(0, 0, 0, 0.9);
  font-size: 0.8em;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
}
.btn-tab:active {
  outline: none;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  background-color: lightgrey;
  transition: all 0.2s;
}
.activeTab {
  background-color: rgba(119, 136, 153, 0.9);
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s;
}
input {
  text-align: center;
  padding: 5px 20px;
  width: 150px;
  font-size: 0.8em;
  text-align: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
input:focus {
  outline: none;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.flashIn {
  box-shadow: 0 3px 20px lightcoral;
}
.flashOut {
  transition: all 3s;
}
.btn-submit {
  background-color: hsl(180, 43%, 47%);
  cursor: pointer;
  padding: 5px 20px;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 0.8em;
  color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}
.btn-submit:hover {
  background-color: hsl(180, 100%, 35%);
  transition: all 0.2s;
}
.btn-submit:active {
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.2);
}
</style>
