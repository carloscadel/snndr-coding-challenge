import { expect } from "chai"
import { mount, shallowMount } from "@vue/test-utils"
import Home from "@/views/Home.vue"
import EmployeeTab from "@/components/EmployeeTab.vue"
import EmployerTab from "@/components/EmployerTab.vue"
import Modal from "@/components/Modal.vue"

describe("Home", () => {
  it("Shows Employee's tab when button is pressed, and hides Employer's tab", () => {
    const wrapper = mount(Home)
    wrapper.find(".btn-tab.employee").trigger("click")
    expect(wrapper.vm.showEmployeeTab).to.equal(true) && expect(wrapper.vm.showEmployerTab).to.equal(false)
  })
  it("Shows Employer's tab when button is pressed, and hides Employee's tab", () => {
    const wrapper = mount(Home)
    wrapper.find(".btn-tab.employer").trigger("click")
    expect(wrapper.vm.showEmployerTab).to.equal(true) && expect(wrapper.vm.showEmployeeTab).to.equal(false)
  })
  it("Returns 'invalid offer' when the user does not submit a number or if the number is negative in the offer input", () => {
    const wrapper = mount(Home)
    expect(wrapper.vm.employeeSubmittedOffer("")).to.equal("invalid offer") && expect(wrapper.vm.employeeSubmittedOffer(-1)).to.equal("invalid offer") && expect(wrapper.vm.employerSubmittedOffer("")).to.equal("invalid offer") && expect(wrapper.vm.employerSubmittedOffer(-1)).to.equal("invalid offer")
  })
  it("Sets showEmployeeInput and showEmployerInput props to false when valid offer is submitted", () => {
    const wrapper = mount(Home)
    wrapper.vm.employeeSubmittedOffer(1)
    wrapper.vm.employerSubmittedOffer(1)
    expect(wrapper.vm.showEmployeeInput).to.equal(false) && expect(wrapper.vm.showEmployerInput).to.equal(false)
  })
  it("Modal is not shown when one of the offers submitted is not valid", () => {
    const wrapper = mount(Home)
    wrapper.vm.employeeOffer = null
    wrapper.vm.employerOffer = null
    wrapper.vm.checkSuccess()
    expect(wrapper.vm.showModal).to.equal(false)
    wrapper.vm.employeeOffer = 1
    wrapper.vm.employerOffer = null
    wrapper.vm.checkSuccess()
    expect(wrapper.vm.showModal).to.equal(false)
    wrapper.vm.employeeOffer = null
    wrapper.vm.employerOffer = 1
    wrapper.vm.checkSuccess()
    expect(wrapper.vm.showModal).to.equal(false)
    wrapper.vm.employeeOffer = 1
    wrapper.vm.employerOffer = 1
    wrapper.vm.checkSuccess()
    expect(wrapper.vm.showModal).to.equal(true)
  })
})

describe("EmployeeTab", () => {
  it("Renders input and submit button", () => {
    const wrapper = shallowMount(EmployeeTab, {
      propsData: { showEmployeeInput: true }
    })
    expect(wrapper.find("input").exists() && wrapper.find(".btn-submit").exists()).to.equal(true)
  })
  it("Does not ender input nor submit button", () => {
    const wrapper = shallowMount(EmployeeTab, {
      propsData: { showEmployeeInput: false }
    })
    expect(wrapper.find("input").exists() && wrapper.find(".btn-submit").exists()).to.equal(false)
  })
})

describe("EmployerTab", () => {
  it("Renders input and submit button", () => {
    const wrapper = shallowMount(EmployerTab, {
      propsData: { showEmployerInput: true }
    })
    expect(wrapper.find("input").exists() && wrapper.find(".btn-submit").exists()).to.equal(true)
  })
  it("Does not ender input nor submit button", () => {
    const wrapper = shallowMount(EmployerTab, {
      propsData: { showEmployerInput: false }
    })
    expect(wrapper.find("input").exists() && wrapper.find(".btn-submit").exists()).to.equal(false)
  })
})

describe("Modal", () => {
  it("modal-container div class is 'success' if Employer's offer is equal or greater than the Employee's", () => {
    var homeWrapper = mount(Home)
    homeWrapper.vm.employeeOffer = 1
    homeWrapper.vm.employerOffer = 1
    homeWrapper.vm.checkSuccess()
    var modalWrapper = shallowMount(Modal, {
      propsData: { headerMessage: homeWrapper.vm.modalHeaderMessage }
    })
    expect(modalWrapper.vm.borderTopClass()).to.equal("success")
    homeWrapper.vm.employeeOffer = 1
    homeWrapper.vm.employerOffer = 2
    homeWrapper.vm.checkSuccess()
    var modalWrapper = shallowMount(Modal, {
      propsData: { headerMessage: homeWrapper.vm.modalHeaderMessage }
    })
    expect(modalWrapper.vm.borderTopClass()).to.equal("success")
  })
  it("modal-container div class is 'failure'  if Employer's offer is lower than the Employee's", () => {
    const homeWrapper = mount(Home)
    homeWrapper.vm.employeeOffer = 2
    homeWrapper.vm.employerOffer = 1
    homeWrapper.vm.checkSuccess()
    const modalWrapper = shallowMount(Modal, {
      propsData: { headerMessage: homeWrapper.vm.modalHeaderMessage }
    })
    expect(modalWrapper.vm.borderTopClass()).to.equal("failure")
  })
})
