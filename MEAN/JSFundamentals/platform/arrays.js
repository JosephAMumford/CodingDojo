let x = [1,2,3];
let y = ['blue', 'yellow','magical unicorns'];
let z = [1, [], null, 'hello world!'];

x.push(4);
console.log(x);

x.pop();
console.log(x);

console.log(y[1]);

console.log(z.length);

let x1 = [];
x1[334] = "Hello World!";
console.log(x1);

if(x.constructor === Array){
    console.log("Yes, x is an array");
}else {
    console.log("No, x is not an array")
}