/*
Problem 05
Write a typescript program which contains one function named as  Fibonacci. That function accept one number from user and print series till that number.

Input : 21
Output : 1 1 2 3 5 8 13 21
*/

var prev : number = 0;
var curr : number = 1;
var next : number = prev + curr;
var terms : number = 8;

function Fibonacci(num) : void 
{
	var i : number = 1;
	for (i; i < terms; ++i) {

		console.log(next);
		prev = curr;
		curr = next;
		next = prev + curr;
	}

}

Fibonacci(terms);

/*	OUTPUT
C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>tsc Problem_05.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>node Problem_05.js
1
2
3
5
8
13
21

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>

*/
