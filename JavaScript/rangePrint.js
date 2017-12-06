function printRange(start, end, skip){
    //Ensure skip is always positive.  Function will handle
    //wether values are ascending or descending later
    if(skip < 0){
        skip = -skip;    
    }
    //Ensure skip has a value of at least 1
    if(!skip || skip == 0){
        skip = 1;
    }
    //If end is not set, use start value and start at zero
    if(!end){
        end = start;
        start = 0;
    }
    //Handles descending values
    if(start > end){
        for(var i = start; i > end; i -= skip){
            console.log(i);
        }
    } 
    //Handles ascending values
    else{
        for(var i = start; i < end; i += skip){
            console.log(i);
        }
    }

}

printRange(2,10,0);