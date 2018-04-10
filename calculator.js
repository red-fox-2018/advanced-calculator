'use strict'

class Calculator {
  constructor (param1,param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.pi = 3.14;
  }
  add (param1,param2) {
    return param1 += param2;
  }
  substract (param1,param2) {
    return param1 -= param2;
  }
  multiply (param1,param2) {
    return param1 -= param2;
  }
  divide (param1,param2) {
    return param1 /= param2;
  }
  square (param1,param2) {
    Math.pow(param1,param2);
  }
  squareRoot (param1) {
    Math.sqrt(param1);
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
