//Object literal: key-value pairs
let x = { };

let sandwich1 = {
    slices_of_bread: 2,
    ham: true,
    veggies: ['lettuce','tomato','onion']
};

//console.log(sandwich1);
//console.log(sandwich1.slices_of_bread);
//console.log(sandwich1.veggies[0]);

let sandwiches = [
    {
        id: 1,
        bread_type: 'Sourdough',
        ingredients: 'Spicy Turkey, Spicy Mustard'
    },
    {
        id: 2,
        bread_type: 'Marbled Rye',
        ingredients: 'Prosciutto, Swiss Cheese'
    },
    {
        id: 3,
        bread_type: 'Wheat',
        ingredients: 'Ham, Provolone Cheese, Tomato'
    }
];

//console.log(sandwiches);
//console.log(sandwiches[0].bread_type);

// here is an object literal with four key-value pairs
let sandwich = {
    cheese: 'Smoked Gouda',
    meat: 'Dry-aged Bison',
    sauce: 'Chipotle Aioli',
    veggies: 'Caramelized Onions'
}
// the variable 'topping' is used instead of an index
for(let topping in sandwich){
    // when we log 'topping', we notice it's a key
    console.log(topping);
    // when we pass the key to the 'sandwich' object, we can pull values
    console.log(sandwich[topping]);
}