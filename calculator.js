'use strict'

class Calculator {
  //write your code here
  constructor (numBase) {
    this._num= numBase
  }
  add (numAdd) {
    this._num=this._num+numAdd
    return this
  }
  substract (numSubstract) {
    this._num=this._num-numSubstract
    return this
  }
  multiply (numMultiply) {
    this._num=this._num*numMultiply
    return this
  }
  divide (numDivide) {
    this._num=this._num/numDivide
    return this
  }
  square (numExponen) {
    this._num=Math.pow(this._num,numExponen)
    return this

  }
  squareRoot () {
    this._num=Math.sqrt(this._num)
    return this
  }
  luasLingkaran(){
    this.pi = 3,14;
    this._num= this.pi*(Math.pow(this._num,2))
    return this
  }
  kelilingLingkaran(){
    this.pi = 3,14
    this._num= 2*this.pi*this._num
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
let calculator = new Calculator(9)
let result = 
console.log(calculator.kelilingLingkaran()._num);