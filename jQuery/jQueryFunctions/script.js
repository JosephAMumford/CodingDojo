$(document).ready(function(){
    
    $('#jq-click-button').click(function(){
        $('#jq-click').text('You clicked the button!');
    })

    $('#jq-hide-button').click(function(){
        $('#jq-hide').hide();
    })

    $('#jq-show-button').click(function(){
        $('#jq-show').show();
    })

    $('#jq-toggle-button').click(function(){
        $('#jq-toggle').toggle();
    })

    $('#jq-slideDown-button').click(function(){
        $('#jq-slideDown').slideDown("slow");
    })

    $('#jq-slideUp-button').click(function(){
        $('#jq-slideUp').slideUp("slow");
    })

    $('#jq-slideToggle-button').click(function(){
        $('#jq-slideToggle').slideToggle();
    })

    $('#jq-fadeIn-button').click(function(){
        $('#jq-fadeIn').fadeIn("slow");
    })

    $('#jq-fadeOut-button').click(function(){
        $('#jq-fadeOut').fadeOut("slow");
    })

    $('#jq-addClass-button').click(function(){
        $('#jq-addClass').addClass("redText");
    })

    $('#jq-before-button').click(function(){
        $('#jq-before').before("This is more text");
    })

    $('#jq-after-button').click(function(){
        $('#jq-after').after(" and here it is");
    })

    $('#jq-append-button').click(function(){
        var text1 = "<p class='inlineText'>longer and</p>";
        var text2 = "<p class='inlineText'>longer</p>";
        $('#jq-append').append(text1,text1,text2);
    })

    $('#jq-html-button').click(function(){
        $('#jq-html').html("The text has been changed");
    })

    $('#jq-attr-button').click(function(){
        $('#jq-attr').attr('style','color: yellow');
    })

    $('#jq-val-button').click(function(){
        $('#jq-val').val("First Name");
    })

    $('#jq-text-button').click(function(){
        $('#jq-text').text('This text was set to the <p> referenced by the button');
    })

    $('#jq-data-button').click(function(){
        $('#jq-data').data("greeting", "Good evening");
        alert($('#jq-data').data("greeting"));
    })
});