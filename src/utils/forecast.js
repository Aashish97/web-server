const request = require('request');

//forecast takes longitude and latitude as a input and provides the weather information accordingly

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ab50cd36126b4928f245dedbfb477f85/' + latitude + ',' + longitude + '?units=si';
    request( {url, json: true}, (error, {body}) => {
        if (error){
            callback("Unable to connect with weather API!!!", undefined);
        }else if (body.error){
            callback("Unable to find the location", undefined);
        }else{
            callback(undefined, {
                currentTemperature: body.currently.temperature,
                rainProbability: body.currently.precipProbability,
                weatherSummary: body.daily.data[0].summary,
                highTemperature: body.daily.data[0].temperatureHigh,
                lowTemperature: body.daily.data[0].temperatureLow
            }
            );
        }
    });

}

module.exports = forecast;