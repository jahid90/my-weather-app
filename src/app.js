// core modules
const path = require('path')
// npm modules
const express = require('express');
const hbs = require('hbs');

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

// Setup the root route
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather'
    });
});

// Setup the /about route
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

// Setup /weather route
app.get('/weather', (req, res) => {
    if (!req.query.location) {
        res.send({
	    error: 'Required query param: [location] missing.'
	});
	return;
    }

    res.send({
	data: {
    	    location: req.query.location,
	    weather: 'It\'s raining outside!'
	}
    })
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
});
