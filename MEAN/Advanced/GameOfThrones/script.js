$(document).ready(function(){

    var imageSources = [
        "HouseArryn.png",
        "HouseBaratheon.png",
        "HouseLannister.png",
        "HouseStark.png",
        "HouseTargaryen.png",
        "HouseTully.png",
        "HouseTyrell.png",
    ];

    var houseIds = ['7','17','229','362','378','395','398'];

    SetImages();

    $('.house-img').click(function(){
        var id = houseIds[$(this).attr('pId')];
        var url = "https://anapioficeandfire.com/api/houses/" + id;
        $.get(url, function(data){

            $('#info-name').text("Name: " + data.name);
            $('#info-words').text("Words: " + data.words);
            $('#info-titles').text("Titles: " + data.titles);
        });
        
    });

    $('.scroll-button').click(function(){
        if($(this).attr('dir') == "0"){
            LeftButton();
        }
        else{
            RightButton();
        }

    });

    function SetImages(){
        $('#selection-area .house-img').each(function(){            
            $(this).attr('src', imageSources[$(this).attr('pId')]);
        });
    }

    function CheckRange(temp){
        if(temp >= imageSources.length){
            temp = 0;
        }
        else if(temp < 0){
            temp = imageSources.length - 1;
        }
        return temp;
    }

    function LeftButton(){
        $('#selection-area .house-img').each(function(){   
            var t = $(this).attr('pId');
            t--;
            $(this).attr('pId', CheckRange(t));
        });

        SetImages();
    }
    
    function RightButton(){
        $('#selection-area .house-img').each(function(){   
            var t = $(this).attr('pId');
            t++;
            $(this).attr('pId', CheckRange(t));
        });
        SetImages();
    }
});