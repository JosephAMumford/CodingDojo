
//Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

console.log("Challenge 1");
//Loop through each student in the list of students
for(let i = 0; i < students.length; i++){
    console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort);
}
console.log("");

//Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 console.log("Challenge 2");
 //Loop through each element in users
 for(var element in users){
    console.log(element.toUpperCase()); 
    //loop through each user in the lists of each element
    for(let j = 0; j < users[element].length; j++){
        //ID's start at 1, so add 1 to each index
        let id = (j + 1);
        let name = users[element][j].last_name + ", " + users[element][j].first_name;
        let length = ((users[element][j].last_name + users[element][j].first_name).length);
        console.log(id + " - " + name.toUpperCase() + " - " + length);
    }
 }