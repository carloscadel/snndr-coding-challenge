// eslint-disable
<template type="text/x-template" id="Modal">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" v-bind:class="borderTopClass()">
          <div class="modal-header">
            <slot name="header">
              <h2>{{ headerMessage }}</h2>
            </slot>
          </div>
          <div class="modal-body">
            <p>
              The employee's minimum accepted salary is
              <b>{{ employeeOffer }}€</b>
              <br>The employer's maximum offered salary is
              <b>{{ employerOffer }}€</b>
              <br>
              <br>
              <span>
                And the current temperature in London is {{ londonTemp }} °C
              </span>
            </p>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-start-over-button" @click="reloadPage">
                Start Over
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";

export default {
  name: "Modal",
  props: {
    headerMessage: String,
    employeeOffer: Number,
    employerOffer: Number
  },
  data() {
    return {
      londonTemp: ""
    };
  },
  methods: {
    borderTopClass() {
      return this.headerMessage
        .toLowerCase()
        .substring(0, this.headerMessage.length - 1);
    },
    reloadPage() {
      window.location.reload();
    }
  },
  mounted() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=d576f7fdae3225a9316f95cdaa3c8583"
      )
      .then(response => {
        this.londonTemp = response.data.main.temp;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      });
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.success {
  border-top: solid 5px lightgreen;
  border-bottom: solid 5px lightgreen;
}
.failure {
  border-top: solid 5px lightcoral;
  border-bottom: solid 5px lightcoral;
}
.modal-container {
  width: 500px;
  /* height: 500px; */
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  text-align: end;
}

.modal-start-over-button {
  background-color: hsl(180, 100%, 30%);
  cursor: pointer;
  padding: 5px 20px;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 0.8em;
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}
.modal-start-over-button:hover {
  background-color: hsl(180, 100%, 35%);
  transition: all 0.2s;
}

.modal-start-over-button:active {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.1s;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
