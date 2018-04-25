
// var
function testing(){
    var x = 10;
    console.log(x); //Ok
}

//console.log(x); //Error, undefined

// let
if (true) {
    let x = 10;
    console.log(x);  
}
//console.log(x); //Error, undefined

// const
const myobj = {
    a: 1, b:2
}
myobj.a = 5 // ok
//myobj.abc = 3 // Error
//myobj = {x:1, y:2, z:3} // Error