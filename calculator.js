// 'use strict'


class Calculator {
  constructor () {
    this.num = 6
  }
  add (num1) {
    this.num = this.num + num1
    return this;
  }
  substract (num1) {
    this.num = this.num - num1
    return this;
  }
  multiply (num1) {
    this.num = this.num * num1
    return this;
  }
  divide (num1) {
    this.num = this.num / num1
    return this;
  }
  square (num1) {
    this.num = Math.pow(this.num,num1)
    return this;
  }
  squareRoot (num1) {
    this.num = Math.sqrt( (this.num * this.num) + (num1 * num1))
    return this;
  }
  roundPi(num1){
    this.num = 2 * Math.PI * num1;
    return this;
  }
}

var total_num = new Calculator()
total_num.add(6)
total_num.substract(3)
total_num.multiply(7)
total_num.divide(2)
total_num.square(7)
total_num.squareRoot(4)
total_num.roundPi(6)

console.log(total_num.add(6).substract(3).multiply(7).divide(2).square(7).squareRoot(4).roundPi(6));

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

// module.exports = Calculator
