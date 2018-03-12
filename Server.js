'use strict';

const express = require('express'),
    http = require('http'),
    app = express(),
    ip = require('ip'),
    bodyParser = require('body-parser'),
    server = http.createServer(app),
    Weather = require('./classes/Weather.js'),
    ServiceRegistration = require('./classes/ServiceRegistration.js');


app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

server.listen(process.env.PORT || 3000, function () {
    const serviceRegistration = new ServiceRegistration("StandortService", 'https://standortservice.herokuapp.com', '443');
    console.log("StandortService");
});


app.get('/StandortService/WeatherAtIndustriehof', function (req, res) {
    let weather = new Weather();
    weather.getActualWeather(function (responseGetActualWeather){
        res.json(responseGetActualWeather);
    });
});

app.get('/StandortService/Test', function (req, res) {
        res.json(new String("Hello World"));
});

app.post('/StandortService/Test2', function (req, res) {
    console.log(req.body.username);
    res.status(200).json('{"key"'+':'+ '"Hello World"}');
});