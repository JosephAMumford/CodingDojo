
function numbersOnly(arr){
    var tempArray = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            tempArray.push(arr[i]);
        }
    }
    return tempArray;
}

console.log("The following function creates a new array consisting only of numbers from the input array");
var newArray = numbersOnly([1,"apple",-3,"orange",0.5]);
console.log(newArray);


console.log("The following function removes non-numbers from the original array");
var newArray1 = [3, 563, "code", 4, true, 3.14, "apple juice", 7];

//Function does not need to be passed an array since it directly refrences newArray1.
//Since it edit's the array directly, no need to return the array back
function numbersOnly1(){
    for(var i = 0; i < newArray1.length; i++){
        if(typeof newArray1[i] !== "number"){
            newArray1.splice(i,1);
        }
    }
}
numbersOnly1();
console.log(newArray1);