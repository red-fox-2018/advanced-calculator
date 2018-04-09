'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let kalkulator = new Calculator()
// let add = new add(2,2)

console.log(kalkulator.init(2).square(3))
console.log(kalkulator.init(2).add(2).substract(3).multiply(10).divide(2).square(2).squareRoot(5))
console.log(kalkulator.kelilingLingkarang(2))
