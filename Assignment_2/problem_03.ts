var arr : number[] = [23,6,7,4,5,7];

function Summation (arr,size) : number {
	var sum : number = 0;
	var i : number = 0;
	while(i < size) {
		sum = sum + arr[i];
		i++;
	}
	return sum; 
}

var len : number = arr.length;
var summ = Summation(arr,len);
console.log("Addition is "+summ);

/*	OUTPUT
	
C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>tsc problem_03.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>node problem_03.js
Addition is 52

*/
