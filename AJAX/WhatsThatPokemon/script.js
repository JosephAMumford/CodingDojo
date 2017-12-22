$(document).ready(function(){

    var PokemonColors = {
        normal: 'darkkhaki',
        fire: 'orangered',
        water: 'royalblue',
        electric: 'gold',
        grass: 'yellowgreen',
        ice: 'powderblue',
        fighting: 'firebrick',
        poison: 'rebeccapurple',
        ground: 'goldenrod',
        flying: 'mediumpurple',
        psychis: 'deeppink',
        bug: 'olivedrab',
        rock: 'darkgoldenrod',
        ghost: 'darkslateblue',
        dragon: 'darkorchid',
        fairy: 'orchid',
    };

    BuildPokedex();

    function BuildPokedex(){
        for(var i = 1; i < 152; i++){
            GetSprite(i);
        }
    }

    function GetSprite(id){
        id = id.toString();
        var str = '<div class="tile">' +
                '<img class="tilePic" pokemonId=' + id + ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + id + '.png" alt="pokemon.png">' +
                '</div>';
        $('#pokedex').append(str);
    }

    $('#pokedex img').hover(
        function(){
            $(this).css("background-color", "rgb(173, 226, 247)")
        },
        function(){
            $(this).css("background-color", "skyblue")
        }
    );

    $('#pokedex img').click(function(){
        var id = $(this).attr('pokemonId');
        GetPokemon(id);
    });

    function GetPokemon(id){
        id = id.toString();
        var url = 'https://pokeapi.co/api/v2/pokemon/' + id;
        $.get(url, function(data){
            console.log(data);
            //If div exists, remove
            if($('#wrapper').find('#cardBox')){
                $('#cardBox').remove();
            }

            $('#wrapper').append('<div id="cardBox"></div>');
            $('#cardBox').append('<h3 class="cardTitle">' + capitalize(data.name) + '</h3>');
            $('#cardBox').append('<img class="cardInfoTile" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + id +'.png" alt="pokemon.png">');
            
            var str = '<div class="statBox"></div>';
            $('#cardBox').append(str);

            str = '<h5>Type:</h5>';
            for(var i = 0; i <  data.types.length; i++){
                str += '<h5 class="stat">' + data.types[i].type.name + '</h5>';
            }

            $('.statBox').append(str);
            $('.statBox').append('<h5>Height: ' + data.height + '</h5>');
            $('.statBox').append('<h5>Weight: ' + data.weight + '</h5>');

            str = '<h5>Abilities:</h5>';
            for(var i = 0; i <  data.abilities.length; i++){
                str += '<h5 class="stat">' + data.abilities[i].ability.name + '</h5>';
            }
            $('.statBox').append(str);

            str = '<h5>Stats</h5>' +
                    '<h5 class="stat">Speed: ' + data.stats[0].base_stat + '</h5>' +
                    '<h5 class="stat">Special Defense: ' + data.stats[1].base_stat + '</h5>' +
                    '<h5 class="stat">Special Attack: ' + data.stats[2].base_stat + '</h5>' +
                    '<h5 class="stat">Defense: ' + data.stats[3].base_stat + '</h5>' +
                    '<h5 class="stat">Attack: ' + data.stats[4].base_stat + '</h5>' +
                    '<h5 class="stat">HP: ' + data.stats[5].base_stat + '</h5>';
             $('.statBox').append(str);

            var color;
            if(PokemonColors[data.types[0].type.name]){
                color = PokemonColors[data.types[0].type.name];
            }
            else{
                color = "magenta"
            }
            $('#cardBox').css('background-color', color);
        });
    }

    function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
});