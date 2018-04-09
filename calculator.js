'use strict'
const pi = 3.14
class Calculator {
  //write your code here
  constructor (num) {
        this.num = num
  }
  add (addBy) {
    this.num = this.num + addBy
    return this
  }
  substract (subsBy) {
    this.num = this.num - subsBy
    return this
  }
  multiply (mulBy) {
    this.num = this.num * mulBy
    return this
  }
  divide (divBy) {
    this.num = this.num / divBy
    return this
  }
  square (sqBy) {
    let multiplier = this.num
    for (let i = 0; i < sqBy-1; i++) {
        this.num = this.num*multiplier
    }
    return this
  }
  squareRoot () {
      this.num = Math.sqrt(this.num)
      return this
  }
  circleRound(){
      this.num = 2*pi*this.num
      return this
  }
  circleArea(){
      let radiusSquare = this.num*this.num
      this.num = pi*radiusSquare
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

module.exports = Calculator
