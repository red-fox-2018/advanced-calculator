'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
  }
  add (num) {
    this.number += num;
    return this;
  }
  substract (num) {
    this.number -= num;
    return this;
  }
  multiply (num) {
    this.number *= num;
    return this;
  }
  divide (num) {
    this.number /= num;
    return this;
  }
  square (num) {
    this.number = Math.pow(this.number, num);
    return this;
  }
  squareRoot (num) {
    this.number = Math.pow(this.number, 1/num)
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

var calculator = new Calculator(25);
var result = calculator.squareRoot(2).add(5).number;


console.log(result);






module.exports = Calculator
