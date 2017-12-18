$(document).ready(function(){

    var imgSources = [
        ["images/02.jpg","images/02a.jpg"],
        ["images/03.jpg","images/03a.jpg"],
        ["images/04.jpg","images/04a.jpg"],
        ["images/05.jpg","images/05a.jpg"],
    ];

    $('img').hover(
        function(){
            console.log("asdasd");
            $(this).attr('src', imgSources[$(this).attr('pId')][1]);
        },
        function(){
            $(this).attr('src', imgSources[$(this).attr('pId')][0]);
        }
    );
});