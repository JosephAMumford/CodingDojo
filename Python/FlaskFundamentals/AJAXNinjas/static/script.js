$(document).ready(function(){

    // This function bundles up the data from index.html and sends to the server to get processed
    // A response is sent back and used to create the proper image
    function SendRequest(request_data){
        $.ajax({
            url: '/process',
            data: {"color": request_data},
            type: 'POST',
            success: function(response) {
                CreateImage(response);
            },
            error: function(error) {
                alert("There was an error processing your request");
            }
        });
    }

    // Create the correct image based on information sent to and received from the server
    function CreateImage(data){
        if($('#image').find('#ninja-img')){
            $('#ninja-img').remove();
        }
        if($('#image').find('.ninja-text')){
            $('.ninja-text').remove();
        }
        
        //If name returned is not April, reveal a Ninja Turtle
        if(data['name'] != "April"){
            var newImage = '<img id="ninja-img" src=' + data['file_path'] + ' alt="ninja.jpg">' +
                            '<p class="ninja-text">You found ' +  data['name'] + '!';
            $('#image').append(newImage);
        }
        //If custom color did not match a ninja, show April and error message
        else {
            var newImage = '<img id="ninja-img" src=' + data['file_path'] + ' alt="ninja.jpg">' +
                            '<p class="ninja-text">There is no ninja with the color ' + data['color'] + '!';
            $('#image').append(newImage);
        }
    }

    // If a color button is pressed, it will send that color to the server
    $(".ninja-button").click(function(){
        SendRequest($(this).val());
    })

    // If a custom color is defined, that will be sent to the server
    $('#enter-button').click(function(){
        SendRequest($('#input-item').val());
    })
})