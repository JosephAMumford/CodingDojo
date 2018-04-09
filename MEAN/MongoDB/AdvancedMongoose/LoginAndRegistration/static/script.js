$(document).ready(function(){

    $('.button-1').click(function(){
        if($(this).attr('name') == 'login'){
            $('#register-box').slideUp("fast");
            if($("#login-box").css('display') == 'none'){
                $('#login-box').slideDown("fast");
                $('#login-box').css('display','inline-block');
            }
        }
        if($(this).attr('name') == 'register'){
            $('#login-box').slideUp("fast");
            if($('#register-box').css('display') == 'none'){
                $('#register-box').slideDown("fast");
                $('#register-box').css('display','inline-block');
            }
        }
    })
});