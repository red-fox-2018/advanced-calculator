/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

'use strict';

class Calculator {
  //write your code here
  constructor(num = 0) {
    this.result = num;
  }
  add(num) {
    this.result += num;
    return this;
  }
  substract(num) {
    this.result -= num;
    return this;
  }
  multiply(num) {
    this.result *= num;
    return this;
  }
  divide(num) {
    this.result /= num;
    return this;
  }
  power(num) {
    this.result = Math.pow(this.result, num);
    return this;
  }
  root(num) {
    this.result = Math.pow(this.result, (1 / num));
    return this;
  }
  pi() {
    this.result *= Math.PI.toPrecision(3);
    return this;
  }
  display() {
    console.log(this.result);
  }
}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */


module.exports = {
  Calculator
};
