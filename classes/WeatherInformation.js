'use strict';
class WeatherInformation {
    constructor(actTemp, minTemp, maxTemp, windSpeed) {
        this.actTemp = actTemp;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.windSpeed = windSpeed;
    }
}
module.exports=WeatherInformation;