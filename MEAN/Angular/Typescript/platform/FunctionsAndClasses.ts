// Never type (will never reach the end of the function)
function errorHandler(message: string): never{
	throw new Error(message);
}
// Void (returns nothing)
function printValue(val: string): void{
	console.log(val);
	return;
}

// Classes (also in ES6)
class SLNode {
	val: number;
	
	constructor(valueP: number){
		this.val = valueP;
	}
	doSomethingFun(){
		console.log("This is FUN!");
	}
}
let firstSLNode = new SLNode(1);