
var PI : number = 3.14;

class Circle {

    radius : number;

     constructor(radius : number) {
        console.log("In Super Class Constructor");
        this.radius = radius;
     }

    Circumference() : number {

        console.log("In Super Class Method");
        var circum : number = 0;
        circum = 2* PI * this.radius;
        return circum;
    }

}

class CircleX extends Circle {
        
        num : number;

        constructor( rad : number) {

            console.log("In Child Class Constructor");      
            super(rad);
            
        }

        Circumfer() : number {

            console.log("In Child Class Method ");
            this.num = super.Circumference();
            var No1 = this.num;
            return No1;
        }
}

var obj = new CircleX(20);
var Ret = obj.Circumfer();
console.log("Circumference Of Circle Is : "+Ret);

/*------------------------------ OUTPUT-----------------------------------

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_03>tsc program3.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_03>node program3.js
In Child Class Constructor
In Super Class Constructor
In Child Class Method
In Super Class Method
Circumference Of Circle Is : 125.60000000000001

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_03>

*/
