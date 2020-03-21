const request = require('request');

//geocode API that converts the CITY into respective latitude and longitude
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?types=address&access_token=pk.eyJ1IjoiYWFzaGlzaHNociIsImEiOiJjazd5bnE4ZnMwMWxoM25uMWNvbXQwZnl1In0._YZETtNB8ssgrJ-hXEFEtw&limit=1';

    request( {url, json: true}, (error, {body}) => {
        if (error){
            callback("Unable to find location service");
        }else if (body.features.length === 0){
            callback("Unable to find the location, please search next location");
        }else{
            callback(undefined, {
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1],
                location : body.features[0].place_name
            }
            );
        }
    });
}

module.exports = geocode;