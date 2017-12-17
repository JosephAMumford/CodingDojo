$(document).ready(function(){

    $('img').click(function(){
        $(this).fadeOut("slow");
    })

    $('#restore-button').click(function(){
        $('img').fadeIn("slow");
    })

});