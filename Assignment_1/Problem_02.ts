/*
Problem 02
Write a typescript program which contains one function named as Area.That function should calculate area of circle.Accept value of radius from user and return its area.default value of PI should be 3.14 if it is not provides by the caller.
Input : 5
Output : Area of circle 78.5
*/

var radius : number = 5;
var PI : number = 3.14;
var ret : number = 0;
function Area(value) : number 
{
	var area : number = 0;
	area = PI * value * value;
	return area;
}

ret = Area(radius);
console.log("Area of circle is "+ret);

/*	OUTPUT:
	C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>tsc Problem_02.ts

	C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>node Problem_02.js
	Area of circle is 78.5


*/