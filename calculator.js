'use strict'

class Calculator {
  constructor (total) {
    this.total = total
    this.phi = 3.14
  }
  
  add (number) {
    this.total += number
    return this
  }

  substract (number) {
    this.total -= number
    return this
  }

  multiply (number) {
    this.total *= number
    return this
  }

  divide (number) {
    this.total /= number
    return this
  }

  square (number) {
    this.total = Math.pow(this.total,number)
    return this
  }

  squareRoot () {
    this.total = Math.sqrt(this.total);
    return this
  }

  cicleRound(number){
    this.total = this.phi*number
    return this
  }

  cicleSize(number){
    this.total = this.phi*Math.pow(number,2)
    return this
  }

}

let calculate = new Calculator(2);
let total = calculate.cicleSize(20).total
console.log(total)

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
