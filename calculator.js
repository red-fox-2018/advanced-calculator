'use strict'

class Calculator {
  constructor(num) {
  this.num = num
  }
  init(num){
    this.num = num
    return this
  }
  add(addnum) {
    this.num+=addnum;
    return this
  }

  substract(subNum) {
    this.num-=subNum
    return this
  }

  multiply(mulNum) {
    this.num*=mulNum
    return this
  }

  divide(divNum) {
    this.num/=divNum
    return this
  }

  square(sqNum) {
  this.num = Math.pow(this.num,sqNum)
    return this
  }

  squareRoot(sqrNum) {
    this.num = sqrNum
    this.num = Math.sqrt(this.num)
    return this
  }

  wideCircle(cirFingerNum){
  this.num = cirFingerNum
   if (this.num % 7 === 0) {
     this.num = (22 / 7) * this.num * this.num;
   } else {
     this.num = 3.14 * this.num * this.num;
   }
   return this
  }

  cumCircle(cirFingerNum){
    this.num = cirFingerNum
    if (this.num % 7 === 0) {
      this.num = (22 / 7) * this.num * 2;
    } else {
      this.num = 3.14 * this.num * 2;
    }
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
