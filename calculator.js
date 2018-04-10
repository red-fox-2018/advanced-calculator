'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
  }
  add () {
    this.number += num
    return this
  }
  substract () {
    this.number -= num
    return this
  }
  multiply () {
    this.number *= num
    return this
  }
  divide () {
    this.number /= num
    return this
  }
  square () {
    this.number = Math.pow(this.number, num)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number, num)
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

module.exports = Calculator
