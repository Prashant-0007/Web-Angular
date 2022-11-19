/*
Problem 04
	Write a typescript program which contains one function named as CheckPrime(). That function should accept one number and it should return true if the given number is prime and otherwise return false.

	Input : 11
	Output : It is prime number
*/

var num : number = 17;
var ret : Boolean;

function CheckPrime(value) : Boolean
{
	var count : number = 0;
	var i : number = 2;
	for(i; i < num ; ++i)
	{
		if(num % i == 0) {
			count++;
		}
	}

	if(count == 0) {
		return true;
	} 
	else {
		return false;
	}
}

ret = CheckPrime(num);
if(ret == true)
{
	console.log("It is prime number");
}
else 
{
	console.log("Not Prime Number");
}

/*	OUTPUT:
	
C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>tsc Problem_04.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>node Problem_04.js
It is prime number

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>tsc Problem_04.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>node Problem_04.js
Not Prime Number

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>tsc Problem_04.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>node Problem_04.js
It is prime number

*/