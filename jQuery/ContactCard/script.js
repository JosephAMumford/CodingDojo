$(document).ready(function(){
    
    $('#contact-cards').on('click', '.card', function(){
        $(this).find('h1').toggle();
        $(this).find('h3').toggle();
        $(this).find('h4').toggle();
    });
    
    $('#addButton').click(function(){
        AddCard();
        ClearForm();
    });

    function AddCard(){
        var f = $('input#first-name').val();
        var l = $('input#last-name').val();
        var d = $('#description').val();
        if(f == "" && l == "" && d == ""){
            event.preventDefault();
            return false;
        }
        else{
            $('#contact-cards').append(
                '<div class="card"><h1>' + f + " " + l+ '</h1><h3>Click for description!</h3><h4>' + d + '</h4></div>'
            );
            event.preventDefault();
        }
    }

    function ClearForm(){
        $('input#first-name').val("");
        $('input#last-name').val("");
        $('#description').val("");
    }
});