'use strict'

/**
 * @author: Iswanul Umam - Red Fox
 */

class Calculator {
  constructor (value) {
    this.number = (value == undefined) ? 1 : value;
  }
  add (input) {
    this.number += input;
    return this;
  }
  substract (input) {
    this.number -= input;
    return this;
  }
  multiply (input) {
    this.number *= input
    return this;
  }
  divide (input) {
    this.number /= input;
    return this;
  }
  square () {
    this.number *= this.number;
    return this;
  }
  squareRoot() {
    this.number = Math.sqrt(this.number);
    return this;
  }
}


// driver code ------------------------------

let calculator = new Calculator(2);
let key = Object.keys(calculator);

let result = calculator.add(8).substract(2).divide(2).square().squareRoot();
console.log('result: 4 equal with', result[key]);


let calc = new Calculator();
let data = Object.keys(calc);
console.log(calc[data]); // 1

const newCalc = calc.add(2);
console.log(newCalc[data]); // 3

const substract = calc.substract(1);
console.log(substract[data]); // 2

const multiply = calc.multiply(11);
console.log(multiply[data]); // 22

const divide = calc.divide(2);
console.log(divide[data]); // 11

const square = calc.square();
console.log(square[data]); // 121

const sqroot = calc.squareRoot();
console.log(sqroot[data]); // 11

module.exports = Calculator

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
