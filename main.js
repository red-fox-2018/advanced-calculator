'use strict'

const Calculator = require("./calculator.js")

let calculator = new Calculator(1)

console.log('tambah',calculator.init(8).add(15));
console.log('kurang',calculator.init(8).substract(2));
console.log('kali',calculator.init(8).multiply(5));
console.log('bagi',calculator.init(8).divide(2));
console.log('pangkat',calculator.init(2).square(2));
console.log('akar',calculator.squareRoot(9));
console.log('luas',calculator.wideCircle(7));
console.log('keliling',calculator.cumCircle(7));

// execute function on calculator.js in here
