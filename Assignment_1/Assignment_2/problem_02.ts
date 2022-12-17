var arr : number[] = [23,89,6,29,56,45,77,32];

function SecondLargest(arr ,size) : number {
	var i ,second : number;
	for(i = 0; i < size; i++)
		console.log(arr[i]);
	second = arr[size-2];
	return second;

}

var len : number = arr.length;
var arr2 : number[] = arr.sort();
var max : number = SecondLargest(arr2,len);
console.log("Second Maximum Elements is "+max);



/*	OUTPUT
	
C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>tsc problem_02.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>node problem_02.js
23
29
32
45
56
6
77
89
Second Maximum Elements is 77


*/

