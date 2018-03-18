//F(n) = F(n-1) + F(n-2)
function fib() {

    var count = 1;          //n : sequence number
    var last_value = 1;     //F(n-2)
    var current_value = 1;  //F(n-1)
    function nacci() {
        
        // First 2 values in sequence are 1
        if(count != 1 && count != 2){
            let temp = current_value;
            current_value = current_value + last_value;
            last_value = temp;
        }
        count++;
        console.log(current_value);
    }

    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"