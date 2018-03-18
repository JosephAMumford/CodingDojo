$(document).ready(function(){
    /*
    // our test object
    var customObject = {
        name:'California, Eureka',
        onClick:function(){
        console.log("I've been clicked");
        console.log(this.name);
        }
    }
    */

    // our test object
    var customObject = {
        name:'California, Eureka',
        onClick:function(myParam){
        console.log("I've been clicked");
        console.log(myParam, "I've been passed by bind");
        console.log(this.name);
        }
    }
    // our behavior on click.
    $('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));
/*
    // our behavior on click.
    //$('button').click(customObject.onClick);
    
    $('button').click(customObject.onClick.bind(customObject));

    var newObject = {
        name:"West Virginia,  Montani semper liberi"
    }
    // modify the button method to this:
    $('button').click(customObject.onClick.bind(newObject));
*/    

    function Ninja(name, age){
        this.name = name;
        this.age = age;
        // there could be lots of other stuff here!
    }
    function BlackBelt(name,age){
        //Commas!
        Ninja.call(this,name,age);
        this.belt = 'black';
    }
    function YellowBelt(name,age){
        //ARRAY
        Ninja.apply(this,[name,age]);
        this.belt = 'yellow';
    }
    var yB = new YellowBelt('mike', 40);
    var bB = new BlackBelt('charlie', 29);
    console.log(bB.name);
    console.log(yB.name);


    function levelUp() {
        console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
    }
    var person = {
        name: 'Lisa',
        gender: 'her',
        language: 'JavaScript, duh!'
    };
    levelUp.call(person);
});

