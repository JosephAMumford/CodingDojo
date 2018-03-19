var math = require('./mathlib.js')();     //notice the extra invocation parentheses!
console.log(math);
console.log(math.add(2,3));
console.log(math.multiply(3,5));
console.log(math.square(5));

//Test a bunch of random numbers to check that they fall within given range
for(let i = 0; i < 50; i++){
    console.log(math.random(1,35));
}

