'use strict';

const Service = require("./Service.js"),
    http = require('http');

class ServiceRegistration {
    constructor(serviceName, serviceAddress, servicePort) {
        this.ownService = new Service(serviceName, serviceAddress, servicePort);
        this.registerInServiceRegister();
    }

    registerInServiceRegister() {
        const postData = JSON.stringify(this.ownService);

        const options = {
            hostname: 'leftloversgateway.azurewebsites.net',
            path: '/APIGateway/ServiceRegister/?password=leftlovers_wwi16B3',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        }
        const req = http.request(options, (res) => {
            res.on('data', (data) => {
                console.log(JSON.parse(data))
                //this.ownService = ;
            });
        });
        req.write(postData);
        req.end();
    }
}

module.exports = ServiceRegistration;