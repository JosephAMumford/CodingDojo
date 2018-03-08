$(document).ready(function(){

});

$('my-button').click(function(){
    $.ajax({
        //url: '', /* Where should this go? */
        success: function(serverResponse) {  /* What code should we run when the server responds? */
            console.log("Received this from server:", serverResponse)
        }
    });
});