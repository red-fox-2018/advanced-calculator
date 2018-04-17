'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calculator = new Calculator(3)
let totalCal = calculator.add(3).substract(2).multiply(3).divide(4).square(2).squareRoot()
console.log('total calulation : ',calculator.num.toFixed(2))
console.log('-------------radius------------------------')
let hitungLingkaran = new Calculator(5)
let keliling = hitungLingkaran.circleRound()
console.log('keliling: ',keliling.num.toFixed(2))
let luas = hitungLingkaran.circleArea()
console.log('luas : ', luas.num.toFixed(2))
