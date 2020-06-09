const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
    console.error(result.error);
} else {
    console.debug(result.parsed);
}

