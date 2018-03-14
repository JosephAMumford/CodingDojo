//Ninja Class
function Ninja(name){
    this.name = name;       //Public
    this.health = 100;      //Public
    const speed = 3;        //Private
    const strength = 3;     //Private

    this.sayName = function(){
        console.log("My name is " + this.name);
    }

    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health.toString() + ", Speed: " + speed.toString() + ", Strength: " + strength.toString() )
    }

    //Private Get
    this.getStrenth = function(){
        return strength;
    }

    //Private Get
    this.getSpeed = function(){
        return speed;
    }

    this.drinkSake = function(){
        this.health += 10;
        return this;
    }

    //Punch function with validation
    this.punch = function(ninja){
        if(ninja instanceof Ninja){
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 health");
            ninja.health -= 5;
        }
        else {
            console.log("Not a valid ninja")
        }
    }

    //Kick function with validation
    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            let damage = (strength * 15);
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage.toString() + " health");
            ninja.health -= damage;
        }
        else {
            console.log("Not a valid ninja")
        }
    }
}

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");

redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
redNinja.showStats();
blueNinja.showStats();

//Validation test, pass an integer to .punch() and .kick()
var x = 3;
redNinja.punch(x);
blueNinja.kick(x);