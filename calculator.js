'use strict'

class Calculator {
  constructor (total) {
    this.total = total
    this.phi = 3.14
  }
  
  add (number) {
    this.total += number
    return this
  }

  substract (number) {
    this.total -= number
    return this
  }

  multiply (number) {
    this.total *= number
    return this
  }

  divide (number) {
    this.total /= number
    return this
  }

  square (number) {
    this.total = Math.pow(this.total,number)
    return this
  }

  squareRoot () {
    this.total = Math.sqrt(this.total);
    return this
  }

  cicleRound(number){
    this.total = this.phi*number
    return this
  }

  cicleSize(number){
    this.total = this.phi*Math.pow(number,2)
    return this
  }

}

let calculate = new Calculator(1);
let total = calculate.add(1).substract(1).multiply(4).divide(1).total
console.log("Penjumlahan, Pengurangan, Perkalian, Pembagian ",total)

let akar = calculate.square(2).total
console.log("Akar ",akar)

let akarpangkat = calculate.squareRoot().total
console.log("Akar Pangkat ",akarpangkat)

let kelilingLingkaran = calculate.cicleRound(20).total
let luaslingkaran = calculate.cicleSize(20).total
console.log("Keliling Lingkaran ", kelilingLingkaran +" "+ "Luas Lingkaran ", luaslingkaran)

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
