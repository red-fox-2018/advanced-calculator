'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = 1;
  }
  add (num) {
    this.result += num;
    return this;
  }
  substract (num) {
    this.result -= num;
    return this;
  }
  multiply (num) {
    this.result *= num;
    return this;
  }
  divide (num) {
    this.result /= num;
    return this;
  }
  square (num) {
    this.result = Math.pow(this.result, num)
    return this;
  }
  squareRoot (num) {
    this.result = Math.pow(this.result, 1/num);
    return this;
  }
}

const calc = new Calculator()
const pi = 3.14;
const r = 3
const luasLingkaran = calc.multiply(r).square(2).multiply(pi);
// const kelilingLingkaran = calc.multiply(2).multiply(pi).multiply(r)
console.log(`luas lingkaran dengan jari-jari ${r} adalah ${luasLingkaran.result}`);
// console.log(calc[data]);

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
