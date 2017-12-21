$(document).ready(function(){

    BuildPokedex();

    function BuildPokedex(){
        for(var i = 1; i < 152; i++){
            GetPokemon(i);
        }
    }

    function GetPokemon(id){
        id = id.toString();
        var url = 'https://pokeapi.co/api/v2/pokemon/' + id;
        $.get(url, function(data){
            var str = '<div class="card">' +
                '<h3>' + data.name + '</h3>' +
                '<img src="https://pokeapi.co/media/sprites/pokemon/' + id + '.png" alt="pokemon.png">' +
                '</div>';
            $('#wrapper').append(str);
        });
    }
});