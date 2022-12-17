
var PI : number = 3.14;

class Circle {

    radius : number;

     constructor(radius : number) {

        this.radius = radius;
     }

     Area() : number {
        var area : number = 0;
        area = PI * this.radius * this.radius;
        return area;
    }

}

var obj2 = new Circle(10);
var Ret = obj2.Area();
console.log("Area Of Circle is : "+Ret);
var obj3 = new Circle(5.5);
Ret = obj3.Area();
console.log("Area Of Circle is : "+Ret);

/* ------------------------OUTPUT-----------------------

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_03>tsc program2.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_03>node program2.js
Area Of Circle is : 314
Area Of Circle is : 94.985

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_03>

*/

