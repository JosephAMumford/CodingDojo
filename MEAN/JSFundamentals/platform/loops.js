for(let i = 0; i < 7; i++){
    console.log('hello');
};

let total = 0;
for(let i = 10; i > 0; i--){
    total = total + i;
}
console.log(total);

let num = 1;
while (num < 6){
    console.log("I'm counting! The number is " + num);
    num = num + 1;
}
console.log("We are done. Goodbye world!");

num = 6;
do {
    console.log("I'm counting! The number is " + num);
    num = num + 1;
}
while (num < 6);
console.log("We are done. Goodbye world!");

let colors = ['blue', 'green', 'red', 'chartreuse'];

for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);  
};

let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
for(let i = 0; i < names.length; i++){
    if(names[i] === 'Kadie'){
        console.log('Kadie is in our array!');
        break;
    }
}
console.log('We finished looping!');

for(let i = 0; i < names.length; i++){
    if(names[i] === 'Steve'){ continue };
    console.log(names[i]);
};