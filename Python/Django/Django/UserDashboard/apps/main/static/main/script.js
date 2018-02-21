$(document).ready(function(){
    //Show or hide comments section per message
    $('.content-toggle').click(function(){
        if($(this).html() == 'Hide'){
            $(this).html('Show');
        }
        else {
            $(this).html('Hide');
        }
        $(this).closest('.message-box').find('.content-box').slideToggle();
    });
    
    $('.message-area').on('input', function () {
        if ($.trim($(this).val()).length > 0){
            $(".post-message-button").removeAttr("disabled"); 
            $(".post-message-button").removeClass('button-1-inactive');
            $(".post-message-button").addClass('button-1')     
        }
        else {
            $(".post-message-button").attr("disabled", "disabled");
            $(".post-message-button").addClass('button-1-inactive');
            $(".post-message-button").removeClass('button-1')  
        }
    });
});