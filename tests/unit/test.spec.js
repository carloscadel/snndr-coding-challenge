import { expect } from "chai"
import { mount, shallowMount } from "@vue/test-utils"
import Home from "@/views/Home.vue"
import EmployeeTab from "@/components/EmployeeTab.vue"
import EmployerTab from "@/components/EmployerTab.vue"

describe("Home", () => {
  it("Renders a div", () => {
    const wrapper = mount(Home)
    expect(wrapper.contains("div")).to.equal(true)
  })
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
})

describe("EmployeeTab", () => {
  it("Renders input and submit button", () => {
    const showEmployeeInput = true
    const wrapper = shallowMount(EmployeeTab, {
      propsData: { showEmployeeInput }
    })
    expect(wrapper.find("input").exists() && wrapper.find(".btn-submit").exists()).to.equal(true)
  })
  it("Does not ender input nor submit button", () => {
    const showEmployeeInput = false
    const wrapper = shallowMount(EmployeeTab, {
      propsData: { showEmployeeInput }
    })
    expect(wrapper.find("input").exists() && wrapper.find(".btn-submit").exists()).to.equal(false)
  })
})
