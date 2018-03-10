$(document).ready(function(){
    $('#myForm').submit(function(e){
        e.preventDefault()
        console.log('Sending Ajax request to', $(this).attr('action'))
        console.log('Submitting the following data', $(this).serialize())
        $.ajax({
          url: $(this).attr('action'), /* Where should this go? */
          method: 'post', /* Which HTTP verb? */
          data: $(this).serialize(), /* Any data to send along? */
          success: function(serverResponse) { /* What code should we run when the server responds? */
            var value = $('.input-item').val();
            var newPost = "<div class='post-note'>" + value + "</div>";
            $('.notes-box').append(newPost);
            $('.input-item').val("");
          }
        })
    });
});

