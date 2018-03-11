function sayName(name){
    console.log("Hello my name is " + name);
};
sayName('Morty');

function sayNamePreminum(first_name, last_name){
    console.log("Hello my name is " + first_name + " " + last_name);
};
sayNamePreminum("Stewart", "Dent");
sayNamePreminum("Rocky", "Balboa");

function sayNameRet(name){
    return "Hello my name is " + name;
};
let message = sayNameRet("Cinderella");
console.log(message);

function ten(){
    return 10;
};
let twenty = ten() + ten();
console.log(twenty);

// -- standalone function ---
function sayName1(name){
    console.log("Hello my name is " + name);
};
// -- anonymous function, stored in a variable --
let sayName2 = function(name){
    console.log("Hello my name is " + name);
};
// -- standalone function, stored in a variable --
let sayName3 = function sayName3(name){
    console.log("Hello my name is " + name);
};

(function(){
    console.log("Hello world!");
})();

let sayName4 = (name) => { console.log("Hello my name is " + name) };
sayName4("Dolores");