var students = [
    {first_name: 'Michael', last_name: 'Jordan'},
    {first_name: 'John', last_name: 'Rosales'},
    {first_name: 'Mark', last_name: 'Guillen'},
    {first_name: 'KB', last_name: 'Tonel'}
]

//Part I
console.log("Print students:")
for(var i = 0; i < students.length; i++){
    console.log(students[i].first_name + " " + students[i].last_name);
}
console.log();

//Part II
var users = {
    'Students': [
        {first_name: 'Michael', last_name: 'Jordan'},
        {first_name: 'John', last_name: 'Rosales'},
        {first_name: 'Mark', last_name: 'Guillen'},
        {first_name: 'KB', last_name: 'Tonel'}
    ],
    'Instructors': [
        {first_name: 'Michael', last_name: 'Choi'},
        {first_name: 'Martin', last_name: 'Puryear'}
    ]
}

console.log("Print students and instructors with letter count of their names:");
console.log("Students");
for(var i = 0; i < users.Students.length; i++){
    console.log((i+1) + " - " + users.Students[i].first_name + " " + users.Students[i].last_name + " - " + (users.Students[i].first_name.length + users.Students[i].last_name.length));
}
console.log("Instructors");
for(var i = 0; i < users.Instructors.length; i++){
    console.log((i+1) + " - " + users.Instructors[i].first_name + " " + users.Instructors[i].last_name + " - " + (users.Instructors[i].first_name.length + users.Instructors[i].last_name.length));
}