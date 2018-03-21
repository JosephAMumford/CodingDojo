/*

    Stringify Array
    var arr = [ "John", "Peter", "Sally", "Jane" ];
    var myJSON = JSON.stringify(arr);

    Stringify Dates
    var obj = { "name":"John", "today":new Date(), "city":"New York"};
    var myJSON = JSON.stringify(obj);

*/

//var arr = [ "John", "Peter", "Sally", "Jane" ];
//var myJSON = JSON.stringify(arr);
//console.log(myJSON);

var obj = { "name":"John", "today":new Date(), "city":"New York"};
var myJSON = JSON.stringify(obj);

console.log(myJSON);