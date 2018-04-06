'use strict';

class Radiusberechnung {

    constructor(lat1, lon1, lat2, lon2) {
        this.lat1 = Number.parseFloat(lat1);
        this.lon1 = Number.parseFloat(lon1);
        this.lat2 = Number.parseFloat(lat2);
        this.lon2= Number.parseFloat(lon2);
    }

    berechnungAbstandInKM(){
         let erdradius = 6371.0;

         let lat = (this.lat2 - this.lat1)* Math.PI / 180;
         let lon = (this.lon2 - this.lon2)* Math.PI / 180;

        let a = Math.sin(lat / 2) * Math.sin(lat / 2) + Math.cos((this.lat1 * Math.PI / 180)) * Math.cos((this.lat2 * Math.PI / 180)) * Math.sin(lon / 2) * Math.sin(lon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = erdradius * c;
        return Math.abs(d);
    }
}
module.exports = Radiusberechnung;