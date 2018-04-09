'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = 0
  }

  add (num) {
    
    this.result += num
    return this
  }
  substract (num) {

    this.result -=  num
    return this
  }
  multiply (num) {

    this.result *= num
    return this
  }
  divide (num) {

    this.result /= num
    return this
  }
  square (num) {

    this.result = Math.pow(this.result, num)
    return this
  }
  squareRoot (num) {

    this.result = Math.round(Math.sqrt(num))
    return this
  }
}

let calculator = new Calculator();

console.log(calculator.add(5).divide(1).multiply(10).square(2).squareRoot(2));


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
