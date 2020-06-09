const axios = require('axios');

const baseUrl = process.env.DARKSKY_BASE_URL;
const key = process.env.DARKSKY_API_KEY

async function getWeather(latitude, longitude) {

	console.debug('Making weather request to:', baseUrl);

	try {
		const apiResponse = await axios.get(`${baseUrl}/${key}/${latitude},${longitude}`, {
			params: {
				units: 'si'
			}
		});

		console.debug('Received response from API:');
		console.debug(apiResponse);

		return {
			data: apiResponse.data
		}
	} catch (error) {
		return {
			error
		};
	}
}

module.exports = {
	get: getWeather
};
