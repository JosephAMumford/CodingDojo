//Uncurried
function ninjaBelt(ninja, beltColor){
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
}
ninjaBelt('Eileen', 'black');

//Curried
//function ninjaBelt(ninja){
//    return function belt(beltColor){ //note the closure here!
//        console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
//    }
//}
//ninjaBelt('Eileen')('black'); //note the double invocation here.