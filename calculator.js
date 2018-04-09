'use strict'

class Calculator {
  //write your code here
  constructor (value) {
    this.value = value
    this.pi    = Math.PI
  }

  add (input) {
    this.value += input
    return this
  }

  substract (input) {
    this.value -= input
    return this
  }

  multiply (input) {
    this.value *= input
    return this
  }

  divide (input) {
    this.value /= input
    return this
  }

  square (input) {
    this.value = Math.pow(this.value, input)
    return this
  }

  squareRoot () {
    this.value = Math.sqrt(this.value)
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calculator = new Calculator(0)
console.log(calculator.add(4).substract(2).multiply(4).divide(2).squareRoot().square(3).value);

module.exports = Calculator
