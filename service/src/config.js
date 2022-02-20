const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
    const result = dotenv.config();

    if (result.error) {
        console.error(result.error);
    } else {
        console.debug(result.parsed);
    }
}
