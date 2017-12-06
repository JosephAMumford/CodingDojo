
var value = 0.01;   //Start value of a penny
var total = 0;      //Sum of money
var days= 0;        //Days to reach sum

console.log("30 days with doubling value each day, starting at a penny:");
for(var i = 1; i < 31; i++){
    value *= 2;
    if(i < 30){
        total += value;
    }

    if(days == 0){                  //If days does not equal zero, desired sum has been reached
        if(total >= 10000){
            days = i;
        }
    }
}
console.log("Total reward after 30 days is $" + total + " dollars");
console.log("It will take " + days + " days for the servant to make $10,000");

console.log();

console.log("The following determines how many days it will take to earn 1 billion dollars.")

value = 0.01;
total = 0;
days = 1;
while(value < 1000000000){
    value *= 2;
    total += value; 
    days++;
}

console.log("It took " + days + " days to get over a billion dollars.  Actual value is $" + value + " dollars.");

console.log();

console.log("The following determines how many days it will take to earn infinite dollars.")
value = 0.01;
total = 0;
days = 1;
while(value < Infinity){
    value *= 2;
    total += value; 
    days++;
}

console.log("It took " + days + " days to get infinite dollars.");