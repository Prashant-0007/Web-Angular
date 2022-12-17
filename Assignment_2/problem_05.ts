var stat = "Pune Kothrud Marvellous Infosystem"

function ChkString(value) : Boolean {
	
	if(stat.search("Marvellous"))
		return true;
	else
		return false;	
}

var ret : Boolean;
ret =ChkString(stat);
if(ret==true)
	console.log("String Contains Marvellous");
else
	console.log("String Not Contains Marvellous");

/*	OUTPUT
	C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>tsc problem_05.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>node problem_05.js
String Contains Marvellous

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>tsc problem_05.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>node problem_05.js
String Contains Marvellous

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>tsc problem_05.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>node problem_05.js
String Contains Marvellous

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>tsc problem_05.ts

C:\Users\91959\Desktop\TypeScript\ASSIGNMENTS\Assignment_02>node problem_05.js
String Contains Marvellous

*/