'use strict'

class Calculator {

  constructor (num) {
    this.number = num;
    this.phi = 3.14;
  }

  add (num) {
    this.number = this.number + num;
    return this;
  }

  substract (num) {
    this.number = this.number - num;
    return this;
  }

  multiply (num) {
    this.number = this.number * num;
    return this;
  }

  divide (num) {
    this.number = this.number1 / num;
    return this;
  }

  square (pow) {
    this.number = Math.pow(this.number,pow);
    return this;
  }

  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this;
  }

  circlearea(){
    let rsquare = Math.pow(this.number,2)
    this.number = this.phi * rsquare;
    return this;
  }

  circlearound(){
    this.number = 2 * this.phi * this.number;
    return this;
  }

}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calculator = new Calculator(5);
let result =  calculator.square().number;
console.log(result);

module.exports = Calculator
