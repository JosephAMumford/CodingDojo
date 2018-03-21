//JSON JavaScriptObjectNotation

//Sending Data
var myObj = { "name":"John", "age":31,"city":"New York" };
var myJSON = JSON.stringify(myObj);

console.log(typeof(myJSON) + " - " + myJSON);    
console.log(myJSON.search(/age/i));
console.log(typeof(myObj));
console.log("--------------------------------");

//Receiving Data
var myJSON1 = '{ "name":"John", "age":31,"city":"New York" }';
var myObj1 = JSON.parse(myJSON1);
console.log(typeof(myObj1) + " - " + myJSON1);
console.log("--------------------------------");