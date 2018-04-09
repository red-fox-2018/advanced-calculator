'use strict'

class Calculator {
  //write your code here
  constructor() {
    this.count = 0
    this.phi = 3.14
  }

  add(number) {

    this.count += number

    return this

  }

  substract(number) {

    this.count -= number

    return this

  }

  multiply(number) {

    this.count *= number

    return this

  }

  divide(number) {

    this.count /= number

    return this

  }

  square(number1, number2) {

    this.count = Math.pow(number1, number2)

    return this

  }

  squareRoot(number) {

    this.count = Math.sqrt(this.count, number)

    return this

  }

  circle(number) {

    this.count = Math.ceil(this.phi * (number * number))

    return this

  }

  equals() {
    return this.count
  }

}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
