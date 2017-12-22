$(document).ready(function(){

    BuildPokedex();

    function BuildPokedex(){
        for(var i = 1; i < 152; i++){
            GetPokemon(i);
        }
    }

    function GetPokemon(id){
        id = id.toString();
            var str = '<div class="card">' +
                '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + id + '.png" alt="pokemon.png">' +
                '</div>';
        $('#wrapper').append(str);
    }
});