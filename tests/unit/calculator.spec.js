import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
})

it('should add 1 to 4 and get 5', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 4
  wrapper.vm.add('1');
  expect(wrapper.vm.runningTotal).to.equal(5)
});

it('should subtract 4 to 7 and get 3', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 7
  wrapper.vm.subtract('4');
  expect(wrapper.vm.runningTotal).to.equal(3)
});

it('should multiply 3 by 5 and get 15', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 3
  wrapper.vm.multiply('5');
  expect(wrapper.vm.runningTotal).to.equal(15)
});

it('should divide 21 by 7 and get 3', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.previousTotal = 21
  wrapper.vm.divide('7');
  expect(wrapper.vm.runningTotal).to.equal(3)
});

it('should concatenate multiple number button clicks', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.runningTotal = ''
  wrapper.vm.numberClick('6')
  wrapper.vm.numberClick('1')
  expect(wrapper.vm.runningTotal).to.equal(61)
});


it('should chain multiple operations together', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.runningTotal = 4
  wrapper.vm.previousTotal = 8
  wrapper.vm.operatorClick('-')
  expect(wrapper.vm.runningTotal).to.equal(4)
});

it('clear the running total without affecting the calculation', () => {
  const wrapper = shallowMount(App)
  wrapper.vm.runningTotal = 4
  wrapper.vm.previousOperator = "-"
  wrapper.vm.clearClick('=')
  expect(wrapper.vm.runningTotal).to.equal(0)
});

