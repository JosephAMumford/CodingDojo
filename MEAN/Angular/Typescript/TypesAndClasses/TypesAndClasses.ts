
var myNum : number = 5;
var myString : string = "Hello universe";
var myArr : number[] = [1,2,3,4];
var myObj : any = { name: 'Bill'};
var anythingVariable : any = "Hey";
anythingVariable = 25;
var arrayOne : boolean[] = [true, false, true, true];
var arrayTwo : any[] = [1, 'abc', true, 2];

myObj = { x: 5, y:10 };

class MyNode {
    val: number;
    _priv: number;

    constructor(value: number){
        this.val = value;
    }

    doSomething(){
        this._priv = 10;
    }
}
let myModelInstance = new MyNode(1);
console.log(myModelInstance.val);

function myFunction(): void {
    console.log("Hellow World");
    return;
}

function sendingErrors(message: string): never {
    throw new Error(message);
}


/* CONVERT TO TypeScript
myNum = 5;
myString = "Hello Universe";
myArr = [1,2,3,4];
myObj = { name:'Bill'};
anythingVariable = "Hey";
anythingVariable = 25; 
arrayOne = [true, false, true, true]; 
arrayTwo = [1, 'abc', true, 2];

myObj = { x: 5, y: 10 };

// object constructor
MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction() {
    console.log("Hello World");
    return;
}

function sendingErrors() {
	throw new Error('Error message'copy);
}
*/