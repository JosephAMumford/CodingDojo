//New underscore JavaScript library
var _ = {
    // Return a list of value where each element has been applied to function
    map: function(list, mapper, callback) {
        let values = [];
        for(let i = 0; i < list.length; i++){
            values[i] = callback(list[i],mapper);
        }
        return values;
    },
    // Use intitial value if needed, like in multiplication; if it is zero, result will always
    // be zero.  For addition, you would pass 0
    reduce: function(list, initial, callback) {  
        let reduction = 0;
        if(initial != 0){
            reduction = initial;
        }
        for(let i = 0; i < list.length -1; i++){
            reduction = callback(reduction,list[i+1]);
        }
        return reduction;
    },
    // Return index of first element which satisfies function
    find: function(list, callback) {   
        let value;
        for(let i = 0; i < list.length; i++){
            if(callback(list[i]) == true){
                value = i;
                break;
            }
        }
        return value;
    },
    // Return a list of all values that satisfy the function
    filter: function(list, callback) { 
        let values = [];
        for(let i = 0; i < list.length; i++){
            if(callback(list[i]) == true){
                values.push(list[i]);
            }
        }
        return values;
    },
    // Return a list of all values that do not satisfy the function
    reject: function(list, callback) { 
        let values = [];
        for(let i = 0; i < list.length; i++){
            if(callback(list[i]) == false){
                values.push(list[i]);
            }
        }
        return values;
    }
}



//Test map function
var mapTest = _.map([1,2,3],3,function(x,y){ 
    return x * y; 
});
console.log(mapTest);

//Test reduce function
var reduceTest = _.reduce([1,2,3,4],1,function(x,y){
    return x + y;
});
console.log(reduceTest);

//Test find function
var findTest = _.find([1,2,3,4,5,6,7,8,9,10], function(x){
    if(x == 7){
        return true;
    }
    else{
        return false;
    }
});
console.log(findTest);

//Test filter function
var filterTest = _.filter([1,2,3,4,5,6,7,8,9,10], function(x){ 
    if(x % 2 == 0){ 
        return true;
    }
    else{
        return false;
    }
});
console.log(filterTest);

//Test reject function
var rejectTest = _.reject([1,2,3,4,5,6,7,8,9,10], function(x){
    if(x % 2 == 0){ 
        return true;
    }
    else{
        return false;
    }
});
console.log(rejectTest);