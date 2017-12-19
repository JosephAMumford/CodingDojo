$(document).ready(function(){
    $('button').click(function(){

        AddRow();
        ClearForm();
    })

    function AddRow(){

        var f = $('input#first-name').val();
        var l = $('input#last-name').val();
        var e = $('input#email-add').val();
        var n = $('input#phone-num').val();
        if(f == "" && l == "" && e == "" && n == ""){
            event.preventDefault();
            return false;
        }
        else{
            $('tbody').append("<tr> <td>" + f + "</td> <td>" + l + "</td> <td>" + e + "</td> <td>" + n + "</td> </tr>");
            event.preventDefault();
        }
    }

    function ClearForm(){
        $('input#first-name').val("");
        $('input#last-name').val("");
        $('input#email-add').val("");
        $('input#phone-num').val("");
    }
});