const request = require('request');

const weather = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' + process.env.DARKSKY_API_KEY + '/' + latitude + ',' + longitude + '?units=si';

    request({ url: url, json: true }, (error, response, body) => {
        if (error) {
	    callback(error);
	} else if (body.error) {
	    callback(body.error);
	} else {
	    callback(undefined, 'It\'s ' + body.currently.summary + ' with a ' + body.currently.precipProbability + '% chance of rain.' +
	            ' The current temperature is ' + body.currently.temperature + ' degress, with a high of ' + body.daily.data[0].temperatureHigh + 
	    	    ' and a low of ' + body.daily.data[0].temperatureLow + ' for the day');
	}
    })
};

module.exports = weather;
