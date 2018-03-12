'use strict';

const Service = require("./Service.js"),
    https = require('https');

class ServiceRegistration {
    constructor(serviceName, serviceAddress, servicePort) {
        this.ownService = new Service(serviceName, serviceAddress, servicePort);
        this.registerInServiceRegister();
    }

    registerInServiceRegister() {
        const postData = JSON.stringify(this.ownService);
        const options = {
            hostname: 'leftloversgateway.azurewebsites.net',
            port:'443',
            path: '/APIGateway/ServiceRegister?password=leftlovers_wwi16B3',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        }
        const req = https.request(options, (res) => {
            res.on('data', (data) => {
                this.ownService.serviceID = data.serviceId;
            });
        });
        req.write(postData);
        req.end();
    }
}

module.exports = ServiceRegistration;