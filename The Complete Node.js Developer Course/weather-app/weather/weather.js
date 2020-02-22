const request = require('request');

var getWeather = (lat, lng, callback) => {

	request({
		url: `https://api.darksky.net/forecast/5bc03019c09d6a591393005985f112b9/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else  {
			callback('Unable to fetch weather');
		} 
	});
};

module.exports.getWeather = getWeather;

