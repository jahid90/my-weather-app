const request = require('request');

const geocode = (location, callback) => {
    const url = 'http://open.mapquestapi.com/geocoding/v1/address?key=' + process.env.MAP_QUEST_API_KEY + '&location=' + location + '&maxResults=1';
    
    request({ url: url, json: true }, (error, response, body) => {
        if (error) {
	    callback(error);
	} else {
	    callback(undefined, {
	        latitude: body.results[0].locations[0].latLng.lat,
		longitude: body.results[0].locations[0].latLng.lng
	    });
	}
    });
};

module.exports = geocode;
