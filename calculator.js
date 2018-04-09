'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num;
  }

  add (numAdd) {
    this.num += numAdd;
    return this;
  }

  substract (numSubstract) {
    this.num -= numSubstract;
    return this;
  }

  multiply (numMultiply) {
    this.num *= numMultiply;
    return this;
  }

  divide (numDivide) {
    this.num /= numDivide;
    return this;
  }

  square (numSquare) {
    this.num = Math.pow(this.num, numSquare);
    return this;
  }

  squareRoot (num) {
    this.num = Math.sqrt(this.num);
    return this;
  }

  circumference(circleNum) {
    3.14 * 2 * circleNum;
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

var calculator = new Calculator(5);
calculator.add(5).divide(2).multiply(3).substract(6).squareRoot().square(2);
console.log(calculator);

module.exports = Calculator
