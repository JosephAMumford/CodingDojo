var Quarters = 100;
var Prize = 80;
var Goal = 200;

var RandomValue = Math.floor(100*Math.random());

function PlaySlots(quarters, goal){
    if(!goal){
        while(quarters > 0){;
            quarters--;
            var temp = Math.floor(100*Math.random());
            if(temp == RandomValue){
                quarters += Prize;
                break;
            }
        }
    }
    else{
        while(quarters < goal){;
            quarters--;
            var temp = Math.floor(100*Math.random());
            if(temp == RandomValue){
                quarters += Prize;
            }
            if(quarters >= goal){
                break;
            }
            if(quarters < 1){
                break;
            }
            console.log(quarters)
        }
    }

    return quarters;
}


console.log("The following function will keep using your quarters until you either win or run out:")
Quarters = PlaySlots(Quarters);

if(Quarters == 0){
    console.log("Too bad, you wasted all your quarters.  Now you have none.")
}
else {
    console.log("You won! You have " + Quarters + " quarters now!");
}

//Function below will keep playing until out of quarters or you win at least 200
Quarters = 100;
RandomValue = Math.floor(100*Math.random());
console.log("The following function will keep going until you have over 200 quarters:")
Quarters = PlaySlots(Quarters, Goal);

if(Quarters == 0){
    console.log("Too bad, you wasted all your quarters.  Now you have none.")
}
else {
    console.log("You won! You have " + Quarters + " quarters now!");
}

