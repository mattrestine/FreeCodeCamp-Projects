window.onload = function() {
    getUserLocation();
};
//-- WEATHER APP | GEOLOCATION & OPENWEATHER API
var currentTemp = 0;
function getUserLocation() {
    var weatherBlock = document.getElementById('weatherblock');
    var apiKey = "519382922ba77aff638ab97785ea21fc";
    var cityData;
    var weatherCondition;
    var weatherIcon;
    var convert = 0;
    var coords = [];
    $.getJSON("http://ipinfo.io", function(x) {
        console.log(x);
        coords = x.loc.split(",");
        console.log(coords);
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ coords[0] + "&lon=" + coords[1] + "&APPID=" + apiKey, function(weatherData) {
            console.log(weatherData);
            //CITY
            cityData = weatherData.name;
            document.getElementById('cityData').innerHTML = cityData;
            //WEATHER CONDITION
            weatherCondition = weatherData.weather[0].description;
            document.getElementById('weatherCondition').innerHTML = weatherCondition;
            //TEMPERATURE
            currentTemp = weatherData.main.temp;
            document.getElementById('currentTemp').innerHTML = temp('F');
            //WEATHER ICON
            weatherIcon = '<img src="http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png" alt="' + weatherCondition + '"/>';
            console.log(weatherIcon);
            document.getElementById('weatherIcon').innerHTML = weatherIcon;
          });
    });
}
function temp(x) { 
                switch(x) {
                    case 'F':
                        x = Math.floor((currentTemp * 1.8) - 459.67);
                        return document.getElementById('currentTemp').innerHTML = x + "&deg; F";
                        break;
                    case 'C':
                        x = Math.floor(currentTemp - 275.15);
                        return document.getElementById('currentTemp').innerHTML = x + "&deg; C";
                        break;
                    } 
}
//-- Open Weather API
