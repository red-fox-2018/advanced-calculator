'use strict'

class Calculator {
  //write your code here
  constructor() {
    this.result = 0;
  }
  init(initNum) {
    this.result = initNum;
    return this;
  }
  add(addNum) {
    this.result += addNum;
    return this;
  }
  substract(substractNum) {
    this.result -= substractNum;
    return this;
  }
  multiply(multiplyNum) {
    this.result *= multiplyNum;
    return this;
  }
  devide(devideNum) {
    this.result /= devideNum;
    return this;
  }
  square() {
    this.result = this.result * this.result;
    return this;
  }
  squareRoot() {
    this.result = Math.sqrt(this.result);
    return this;
  }
  pi() {
    if (this.result % 7 === 0) {
      this.result = 22 / 7;
    } else {
      this.result = 3.14;
    }

    return this;
  }
  equal() {
    return this.result;
  }
  reset() {
    this.result = 0;
    return this.result;
  }
}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */

module.exports = Calculator;