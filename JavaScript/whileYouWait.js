var daysUntilMyBirthday = 60;

for(var i = daysUntilMyBirthday; i >= 0; i--){
    if(i > 30){
        console.log(daysUntilMyBirthday + " days until my birthday.  Sigh...");
    }
    else if(i <= 30 && i > 5){
        console.log(daysUntilMyBirthday + " days until my birthday!  Awesome sauce!");
    }
    else if(i <= 5 && i > 1){
        console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!  AHHHHH!!!");
    }
    else if(i == 1){
        console.log("Just one... more... day...");
    }
    else {
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
        console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
        console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
    }
    daysUntilMyBirthday--;
}