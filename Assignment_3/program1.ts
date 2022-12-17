/*

*/

class Arithmetic {

    Number1 : number;
    Number2 : number;

    constructor(x : number, y : number) {

        this.Number1 = x;
        this.Number2 = y;
    }

    Addition() : number {
       
        var sum : number = 0;
        sum = this.Number1 + this.Number2;
        return sum;
    }
    Substraction() : number {
        
        var sub : number = 0;
        sub = this.Number1 - this.Number2;
        return sub;
    }
    Multiplication() : number {

         var mul : number = 0;
         mul = this.Number1 * this.Number2;
         return mul;
    }
    Division() : number {

        var div : number = 0;
        div = this.Number1/this.Number2;
        return div;
    }
}

var obj1 = new Arithmetic(10,11);
var Ret = obj1.Addition();
console.log("Addition is : "+Ret);
Ret = obj1.Substraction();
console.log("Substraction is : "+Ret);
Ret = obj1.Multiplication();
console.log("Multiplication is : "+Ret);
Ret = obj1.Division();
console.log("Division is : "+Ret);

var obj2 = new Arithmetic(22,25);
Ret = obj2.Addition();
console.log("Addition is : "+Ret);
Ret = obj2.Substraction();
console.log("Substraction is : "+Ret);
Ret = obj2.Multiplication();
console.log("Multiplication is : "+Ret);
Ret = obj2.Division();
console.log("Division is : "+Ret);


/*  ------------------------OUTPUT-------------------------

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_03>tsc program1.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_03>node program1.js
Addition is : 21
Substraction is : -1
Multiplication is : 110
Division is : 0.9090909090909091
Addition is : 47
Substraction is : -3
Multiplication is : 550
Division is : 0.88

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_03>

*/