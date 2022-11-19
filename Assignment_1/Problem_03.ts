/*
Problem 03
Write a typescript program which contains one fucntion named as DisplayFactors.That function should accept one number and display factors of that number.
Input : 20
Output : 1 2 4 5 10

*/
var num : number = 20;

function DisplayFactors(value) : void
{
	var i : number = 1;
	for(i; i < 20; ++i) 
	{
		if(value % i == 0)
			{
				console.log(" "+i);
			}
	}
}

DisplayFactors(num);

/*
	C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>tsc Problem_03.ts

	C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_01>node Problem_03.js
 	1
 	2
 	4
 	5
 	10

*/
