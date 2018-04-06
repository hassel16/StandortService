'use strict';

const express = require('express'),
    http = require('http'),
    app = express(),
    bodyParser = require('body-parser'),
    server = http.createServer(app),
    Radiusberechnung = require('./classes/Radiusberechnung.js'),
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


app.get('/StandortService/Abstandsberechnung', function (req, res) {
    let radiusBerechnung = new Radiusberechnung(req.query.lat1,req.query.lon1,req.query.lat2,req.query.lon2)
    res.status(200).json(radiusBerechnung.berechnungAbstandInKM());
});

app.get('/StandortService/health', function (req, res) {
        res.json("I'm already up!");
});
