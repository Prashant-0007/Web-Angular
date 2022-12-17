var Arr : number[] = [23,89,666,29,56,45,77,32];

function Maximum(len) : number
{
	var i : number = 0;
	var j : number = 1;
	var big : number = Arr[0];
	for(i; i < len; ++i) {
			if(Arr[i] > big)
				big = Arr[i];
	}

	return big;


}

var max : number;
var len : number = Arr.length;
max = Maximum(len)
console.log("Maximum number is "+max);

/*	OUTPUT
	
	C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>tsc problem_01.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>node problem_01.js
Maximum number is 89

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>tsc problem_01.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>node problem_01.js
Maximum number is 666

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>


*/