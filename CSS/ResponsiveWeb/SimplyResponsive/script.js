$(document).ready(function(){
    $(window).resize(function() {
    if(window.outerWidth < 480){
        document.title = "Phone";
    }
    if(window.outerWidth > 1024){
        document.title = "Desktop";
    }
    else if(window.outerWidth > 480){
        document.title = "Tablet";
    }
    });
});