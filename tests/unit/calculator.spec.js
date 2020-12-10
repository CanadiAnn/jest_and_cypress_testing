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
  wrapper.vm.previousTotal = 8
  wrapper.vm.previousOperator = "-"
  wrapper.vm.numberClick('1')
  expect(wrapper.vm.runningTotal).to.equal(7)
});




// operatorClick: function (operator) {
//   // if there was a previous operator recorded as having been clicked, perform
//   // the operation for the previous operator
//   if (this.previousTotal && this.previousOperator) {
//     switch (this.previousOperator) {
//       case "+":
//         this.add(this.runningTotal);
//         break;
//       case "-":
//         this.subtract(this.runningTotal);
//         break;
//       case "*":
//         this.multiply(this.runningTotal);
//         break;
//       case "/":
//         this.divide(this.runningTotal);
//         break;
//     }
//   }



// TEST UNITS
//
// - `add()` - add 1 to 4 and get 5 (Done)
// - `subtract()` subtract 4 from 7 and get 3 (Done)
// - `multiply()` - multiply 3 by 5 and get 15 (Done)
// - `divide()` - divide 21 by 7 and get 3 (Done)
// - `numberClick()` - concatenate multiple number button clicks (Done)
// - `operatorClick()` - chain multiple operations together
// - `clearClick()` - clear the running total without affecting the calculation

// FROM NOTES
// toBe() Checks equality of a return value
// toHaveLength() Checks array lengths
// toMatch() Checks for string equality