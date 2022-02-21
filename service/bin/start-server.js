const app = require('../src/app');

// Set the port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});
