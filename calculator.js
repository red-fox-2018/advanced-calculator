// 'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.total = num
  }
  add (num) {
    this.total+=num
    return this
  }
  substract (num) {
    this.total-=num
    return this
  }
  multiply (num) {
    this.total*=num
    return this
  }
  divide (num) {
    this.total/num
    return this
  }
  square (num) {
    this.total = Math.pow(this.total,num)
    return this
  }
  squareRoot () {
    this.total = Math.sqrt(this.total)
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

// module.exports = Calculator
var calculator = new Calculator(0)
let result = calculator.add(2).add(4).multiply(2).square(2).squareRoot().total
console.log(result)
