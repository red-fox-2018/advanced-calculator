class Calculator{
    constructor(input){
        this.input=input
        this.result = 0
    }

    //jadi
    addition(input){
       this.result= this.result+input
       return this
    }

    subtraction(input){
        this.result=-input
        return this
    }

    multiplication(input){
        this.result*=input
        return this
    }

    square(input){
        this.result=Math.pow(this.result,input)
        return this
    }


    nthRoot(input){
        this.result=Math.pow(this.result, 1/input)
        return this
    }

    circleArea(){
       //this.result is the radius
       this.result=Math.PI * Math.pow(this.result,2)
        return this
    }
    
    circleCircumferences(){
        this.result=2*Math.PI*this.result
        return this
    }
}

var calcu = new Calculator(5)
calcu.addition(5)
console.log(calcu.addition(5).subtraction(7).result)
// .add(5).multiplication(5).result