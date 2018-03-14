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
}

//Create new ninja
const ninja1 = new Ninja("Hanzo");
ninja1.sayName();   
ninja1.showStats();     
ninja1.drinkSake().showStats();     //Show stats again to show drinkSake() worked