'use strict';
const http = require('http');

class Service {

    constructor(serviceName, serviceUrl, servicePort, serviceID) {
        this.serviceName = serviceName;
        this.serviceUrl = serviceUrl;
        this.servicePort = servicePort;
        this.serviceID;
    }

    getServiceFromServiceRegister(callback) {
        const options = {
            hostname: '127.0.0.1',
            port: 8080,
            path: `/serviceRegister/Service/${this.serviceName}`,
            method: 'GET'
        }

        const req = http.request(options, (res) => {
            res.on('data', (data) => {
                callback(JSON.parse(data));
            });
        });
        req.end();
    }


}
module.exports = Service;