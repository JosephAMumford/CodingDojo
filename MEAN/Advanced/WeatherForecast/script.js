$(document).ready(function(){
    $('form').submit(function() {

        var city = $('#cityId').val();
        var units = $("input[name='units']:checked").val();
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + units + '&&appid=f83fa28c9dca41604aad53a9f4c5cf70';

        var inHistory = false;
        GetWeatherInfo(url, city, units, inHistory);

        return false;
    });

    function GetWeatherInfo(url, city, units, inHistory){

        $.get(url, function(data) {

            if($('#wrapper').find('#weatherBox')){
                $('#weatherBox').remove();
            }

            $('#searchForm').append('<div id="weatherBox"></div>');
            $('#weatherBox').append('<h3>Current weather in ' + capitalize(data.name) + '</h3>');

            var tempUnit;
            if(units == 'metric'){
                tempUnit = 'C°';
            }
            else{
                tempUnit = 'F°';
            }

            var str = '<h4>Current temp: ' + data.main.temp + ' ' + tempUnit + '</h4>' +
                '<h4>Hi: ' + data.main.temp_max + ' ' + tempUnit + '</h4>' +
                '<h4>Low: ' + data.main.temp_min + ' ' + tempUnit + '</h4>' +
                '<h4>Humidity: ' + data.main.humidity + '%</h4>';
            
            $('#weatherBox').append(str);

            str = '';
            for(var i = 0; i < data.weather.length; i++){
                str += '<h4>' + capitalize(data.weather[i].description) + '</h4>'
            }

            $('#weatherBox').append(str);

            if(inHistory == false){
                var searchCity = city;
                var searchURL = url;
    
                var history = '<div class="historyTab">' +
                                '<h4 searchurl="' + searchURL + ' " cityName=" ' + city + ' " units=" ' + units + ' ">' + searchCity + '</h4>' +
                            '</div>';
                $('#searchHistory').append(history);
    
            }
        }, 'json');
    }

    $('#searchHistory').on('click', '.historyTab', function(){
        var city = $(this).find('h4').attr('city');
        var units = $(this).find('h4').attr('units');
        var url = $(this).find('h4').attr('searchurl');
        
        GetWeatherInfo(url, city, units, true);
    });

    function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
});