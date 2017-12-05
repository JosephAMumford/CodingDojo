//Input variables
//Enter a number 1 - 12 for hour and 1 - 59 for minute
var hour = 3;
var minute = 45;
var period = "PM";

//Time display variables
var timeOfDay;                

if(period == "AM"){
    if(hour == 12 && minute == 0){
        timeOfDay = "12:00 midnight.";
    }
    else if(minute == 5){
        timeOfDay = "5 past " + hour + " in the morning.";
    }
    else if(minute == 15){
        timeOfDay = "quarter past " + hour + " in the morning.";
    }
    else if(minute == 30){
        timeOfDay = "half past " + hour + " in the morning.";
    }
    else if(minute == 45){
        timeOfDay = "quarter till " + hour + " in the morning.";
    }
    else if(minute > 45 && minute < 55){
        timeOfDay = "almost " + hour + " in the morning.";
    }
    else if(minute == 55){
        timeOfDay = "5 till " + hour + " in the morning.";
    }
    else {
        if(minute < 10){
            timeOfDay = hour + ":0" + minute + " in the morning.";  
        }
        else{
            timeOfDay = hour + ":" + minute + " in the morning.";
        }  
    }
}
else{
    if(hour == 12 && minute == 0){
        timeOfDay = "12:00 noon.";
    }
    else if(hour < 6){
        if(minute == 5){
            timeOfDay = "5 past " + hour + " in the afternoon.";
        }
        else if(minute == 15){
            timeOfDay = "quarter past " + hour + " in the afternoon.";
        }
        else if(minute == 30){
            timeOfDay = "half past " + hour + " in the afternoon.";
        }
        else if(minute == 45){
            timeOfDay = "quarter till " + hour + " in the afternoon.";
        }
        else if(minute > 45 && minute < 55){
            timeOfDay = "almost " + hour + " in the afternoon.";
        }
        else if(minute == 55){
            timeOfDay = "5 till " + hour + " in the afternoon.";
        }
        else {
            if(minute < 10){
                timeOfDay = hour + ":0" + minute + " in the afternoon.";
            }
            else {
                timeOfDay = hour + ":" + minute + " in the afternoon.";
            }

        }
    }
    else {
        if(minute == 5){
            timeOfDay = "5 past " + hour + " at night.";
        }
        else if(minute == 15){
            timeOfDay = "quarter past " + hour + " at night.";
        }
        else if(minute == 30){
            timeOfDay = "half past " + hour + " at night.";
        }
        else if(minute == 45){
            if(hour == 11){
                timeOfDay = "quarter till midnight";
            }
            else{
                timeOfDay = "quarter till " + hour + " at night.";
            }
        }
        else if(minute > 45 && minute < 55){
            if(hour == 11){
                timeOfDay = "almost midnight";
            }
            else {
                timeOfDay = "almost " + hour + " at night.";
            }
        }
        else if(minute == 55){
            if(hour == 11){
                timeOfDay = "5 till midnight.";
            }
            else{
                timeOfDay = "5 till " + hour + " at night.";
            }
        }
        else {
            if(minute < 10){
                timeOfDay = hour + ":0" + minute + " at night.";
            }
            else{
                timeOfDay = hour + ":" + minute + " at night.";
            }
        }
    }
}

console.log("The time is " + timeOfDay);




