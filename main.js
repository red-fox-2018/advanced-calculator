'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calculator = new Calculator();

console.log(calculator.init(5).add(10).multiply(10).squareRoot().square().equal());
calculator.reset();
console.log(calculator.pi().multiply(7).multiply(7).equal());
calculator.reset();
