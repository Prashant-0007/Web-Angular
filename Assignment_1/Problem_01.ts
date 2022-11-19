/*
Problem 1
Write a typescript program which contains on function named as maximum.That function accepts three parameters and it should returns largest from three input parameters.

Input : 23 89 6
output : Maximum number is 89.
*/

var no1 : number = 93;
var no2 : number = 889;
var no3 : number = 6;
var ret : number = 0;

function Maximum(no1,no2,no3) : number {

	if(no1 > no2 && no1 > no3) {
	
		return no1;
	}
	else if(no2 > no1 && no2 > no3) {
	
		return no2;
	}
	if(no3 > no2 && no3 > no1) {
	
		return no3;
	}
}

ret = Maximum(no1,no2,no3);
console.log("Maximum Number is "+ret);

/*OUTPUT:
C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>tsc Problem_01.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>node Problem_01.js
Maximum Number is 889

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>




*/
