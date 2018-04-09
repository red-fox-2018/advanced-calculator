// 'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.total = num
    this.pi = 3.14
  }
  add (num) {
    this.total+=num
    return this
  }
  substract (num) {
    this.total-=num
    return this
  }
  multiply (num) {
    this.total*=num
    return this
  }
  divide (num) {
    this.total/num
    return this
  }
  square (num) {
    this.total = Math.pow(this.total,num)
    return this
  }
  squareRoot () {
    this.total = Math.sqrt(this.total)
    return this
  }
  luasLingkaran(num){
    this.total = this.pi*Math.pow(num,2)
    return this
  }
  kelilingLingkaran(num){
    this.total = this.pi*num
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

// module.exports = Calculator
var calculator = new Calculator(0)
let result = calculator.add(2).add(4).multiply(2).square(2).squareRoot().total
let luas_lingkaran = calculator.luasLingkaran(2).total
let keliling_lingkaran = calculator.kelilingLingkaran(2).total
console.log(result)
