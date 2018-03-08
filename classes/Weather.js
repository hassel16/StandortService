'use strict';

const http = require('http'),
    WeatherInformation = require('./WeatherInformation');

class Weather {

    constructor(){

    }
   
    getActualWeather(callback) {
        const options = {
            hostname: `api.openweathermap.org`,
            path: `/data/2.5/weather?APPID=d638122cd93abbb2c40f503505f0c554&zip=60486,de`,
            method: 'GET',
        }
        Weather.prototype.requestToGetActualWeather(options, function (responseGetActualWeather) {
            callback(responseGetActualWeather);
        });
    }

    requestToGetActualWeather(options, callback) {
        const req = http.request(options, (res) => {
            var body = "";
            res.on('data', (resData) => {
                body += resData;
            });
            res.on('end', function () {
                var json = JSON.parse(body);
                let weather = json.main;
                let weatherinformation = new WeatherInformation((weather.temp-273.15), 
                                                                (weather.temp_min-273.15), 
                                                                (weather.temp_max-273.15),
                                                                json.wind.speed);
                callback(weatherinformation);
            });
        });
        req.end();
    }
}

module.exports = Weather;