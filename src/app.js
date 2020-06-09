// core modules
const path = require('path');

// npm modules
const express = require('express');
const hbs = require('hbs');

// disable debug logging in prod
if (process.env.NODE_ENV === 'production') {
    console.debug = (args) => {};
}

// load config
require('./config');

// local modules
const geoService = require('./service/geo');
const weatherService = require('./service/weather');


// Create the app
const app = express();

// Setup app configurations
const port = process.env.PORT || 3000;
const staticResourcesPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Configure the app
app.use(express.static(staticResourcesPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// App routes
const routes = [
    {
        route: '/',
        method: 'GET',
        params: '',
    },
    {
        route: '/about',
        method: 'GET',
        params: ''
    },
    {
        route: '/weather',
        method: 'GET',
        params: 'location=<location>'
    }
];

// Setup the root route
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        routes: routes
    });
});

// Setup the /about route
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

// Setup /weather route
app.get('/weather', async (req, res) => {
    if (!req.query.location) {
        res.send({
            error: 'Required query param: [location] missing.'
        });
        return;
    }

    try {
        const geoResponse = await geoService.get(req.query.location);

        if (geoResponse.error) {
            res.send({error});
            return;
        }

        const bestMatch = geoResponse.data.locations[0];

        const weatherResponse = await weatherService.get(bestMatch.latLng.lat, bestMatch.latLng.lng);

        if (weatherResponse.error) {
            res.send({error});
            return;
        }

        res.send({
            data: {
                query: geoResponse.data.providedLocation.location,
                country: bestMatch.adminArea1,
                coordinates: {
                    latitude: bestMatch.latLng.lat,
                    longitude: bestMatch.latLng.lng
                },
                weather: weatherResponse.data.currently
            }
        });
        return;
    } catch (error) {
        res.send({error});
        return;
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
});
