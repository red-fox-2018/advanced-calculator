'use strict'

class Calculator {
  //write your code here
  constructor (angka1) {
    this.angka1 = angka1
    // this.penjumlahan = angka1+angka2
  }
  init(angkaInput){
    this.angka1 = angkaInput
    return this
  }

  add (addAngka) {
    this.angka1 += addAngka
    return this
  }
  substract (substractAngka) {
    this.angka1 -= substractAngka
    return this
  }
  multiply (multiplyAngka) {
    this.angka1 *= multiplyAngka
    return this
  }
  divide (devideAngka) {
    this.angka1 /= devideAngka
    return this
  }
  square (angkaPangkat) {
    // this.angka1 = angkaPangkat
    this.angka1 = Math.pow(this.angka1,angkaPangkat)
    return this
  }
  squareRoot (angkaAkar) {
    this.angka1 = Math.sqrt(this.angka1, angkaAkar)
    return this
  }
  kelilingLingkarang(jarijari){
    this.angka1 = jarijari
    this.angka1 = 3.14 * (jarijari * jarijari)
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
