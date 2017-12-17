$(document).ready(function(){
    
    var picSources = [["img/cat0.png","img/ninja0.png"],
                    ["img/cat1.png","img/ninja1.png"],
                    ["img/cat2.png","img/ninja2.png"],
                    ["img/cat3.png","img/ninja3.png"],
                    ["img/cat4.png","img/ninja4.png"],];

    Randomize();

    $('.puzzleBox img').click(function(){   
        if($(this).attr('picId') == 0){
            $(this).attr('src', picSources[$(this).attr('cell')][1]);
            $(this).attr('picId',1);
        }
        else{
            $(this).attr('src', picSources[$(this).attr('cell')][0]);
            $(this).attr('picId',0);
        }
    });

    $('.foot-button').click(function(){
        if($(this).attr('func') == "rand"){
            Randomize();
        }
        if($(this).attr('func') == "cat"){
            SolveCat();
        }
        if($(this).attr('func') == "ninja"){
            SolveNinja();
        }
    })

    function Randomize(){
        $('.puzzleBox img').each(function(){
            var r = Math.random();
            if(r > 0.5){
                r = 1;
            }
            else {
                r = 0;
            }
            $(this).attr('picId',r);
            $(this).attr('src', picSources[$(this).attr('cell')][$(this).attr('picId')]);
        })
    }

    function SolveCat(){
        $('.puzzleBox img').each(function(){
            $(this).attr('picId',0);
            $(this).attr('src', picSources[$(this).attr('cell')][$(this).attr('picId')]);
        })
    }

    function SolveNinja(){
        $('.puzzleBox img').each(function(){
            $(this).attr('picId',1);
            $(this).attr('src', picSources[$(this).attr('cell')][$(this).attr('picId')]);
        })
    }
    
});