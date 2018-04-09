'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    //this.add_object=num;
    // this.substract_object=num;
    // this.multiply_object=num;
    // this.divide_object=num;
    // this.square_object=num;
    // this.squareRoot_object=num;
    this.total=num;

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
    this.total /=num
    return this
  }
  square (num,pangkat) {
    this.total = Math.pow(num,pangkat)
    return this
  }
  squareRoot (num) {
    this.total=Math.sqrt(num);
    return this
  }

  luasLingkaran(num) {
    this.total=3.14*Math.pow(num,2);
    return this
  }

  kelilingLingkaran(num) {
    this.total=3.14*(2*num);
    return this;
  }

}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

var calc= new Calculator(2);

console.log(calc.add(2).add(2).total);


module.exports = Calculator
