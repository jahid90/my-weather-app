const axios = require('axios');

const baseUrl = process.env.MAP_QUEST_BASE_URL;
const key = process.env.MAP_QUEST_API_KEY;

async function getGeoCoordinates(location) {

    console.debug('Making geo request to: ', baseUrl);

    try {
        const apiResponse = await axios.get(baseUrl, {
            params: {
                key,
                location
            }
        });

        console.debug('Received response from API');
        console.debug(apiResponse);

        return {
            data: apiResponse.data.results[0]
        };
    } catch (error) {
        return {
            error
        };
    }
}

module.exports = {
    get: getGeoCoordinates
};
