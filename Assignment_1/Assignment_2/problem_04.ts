var num : number = 153;
var sum : number = 0;
var dup : number = num;

function ArmStrong(num) : void {
	
	var rem : number = 0;
	for ( num ; num > 0; num = num / 10) {

		rem = num % 10;
		console.log(rem);
		sum = sum + (rem * rem *rem);
	}
}

ArmStrong(num);
if(dup == sum) {
	console.log("It is Armstrong number.");
}
else {
	console.log("Not a Armstrong number.");
}

