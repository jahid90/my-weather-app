const weatherForm = document.querySelector('#weather-form');
const locationField = document.querySelector('#location');
const weatherData = document.querySelector('#weather-data');
const errorData = document.querySelector('#error-data');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = locationField.value;
    locationField.value = '';

    fetchWeather(location);
});

const fetchWeather = (location) => {
    // Clear the error and weather data from previous calls
    errorData.innerText = '';
    weatherData.innerText = 'loading...';

    // Fetch the weather
    fetch('/weather?location=' + location)
	.then(response => {
	    return response.json();
	})
	.then(json => {
	    if (json.error) {
		// Update errors in the UI, if any were found
	        errorData.innerText = json.error;
		weatherData.innerText = '';
	    } else {
		// Update the weather data in the UI
	    	weatherData.innerText = json.data.location + ' - ' + json.data.weather;
	    }
	})
	.catch(error => {
	    // Update errors in the UI
	    errorData.innerText = error;
	});
};
