//Ninja Class
class Ninja {
    constructor (name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}

//Sensei class, inherits from Ninja
class Sensei extends Ninja {
    constructor (name){
        super(name);
        this.name = name;
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;       //Add new attribute
    }

    speakWisdom(){
        //Get funtion from parent class
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    
}

//Create a ninja and do a few things
const ninja1 = new Ninja("Hanzo");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

console.log("");

//Create a sensei and speak some wisdom
const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();