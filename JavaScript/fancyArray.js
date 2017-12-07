var array = ["James", "Jill", "Jane", "Jack"];

function printArray(symbol, reverse){
    if(!symbol){
        symbol = "->";
    }
    if(reverse == true){
        for(var i = array.length-1; i >= 0; i--){
            console.log(i + " " + symbol + " " + array[i]);
        }
    }
    else {
        for(var i = 0; i < array.length; i++){
            console.log(i + " " + symbol + " " + array[i]);
        }
    }
}

console.log("Passing a symbol and printing from the beginning of the array");
printArray("::",false);
console.log("Passing empty symbol so default symbol is used and printing from the end of the array");
printArray("",true);