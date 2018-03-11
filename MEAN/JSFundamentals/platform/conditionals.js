let cake = true;
let hunger = true;
let birthday = "May 13th";
if(cake){
    if(hunger === true && birthday === "May 13th"){
        eat_cake();
    }else{
        dont_eat_cake();
    }
}

function eat_cake(){
    console.log("Eat cake")
}

function dont_eat_cake(){
    console.log("Don't eat cake")
}