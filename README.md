[![service-build](https://github.com/jahid90/my-weather-app/actions/workflows/service.yaml/badge.svg)](https://github.com/jahid90/my-weather-app/actions/workflows/service.yaml)
[![client-build](https://github.com/jahid90/my-weather-app/actions/workflows/client.yaml/badge.svg)](https://github.com/jahid90/my-weather-app/actions/workflows/client.yaml)

[![client-code-ql](https://github.com/jahid90/my-weather-app/actions/workflows/client-codeql-analysis.yml/badge.svg)](https://github.com/jahid90/my-weather-app/actions/workflows/client-codeql-analysis.yml)
[![service-code-ql](https://github.com/jahid90/my-weather-app/actions/workflows/service-codeql-analysis.yml/badge.svg)](https://github.com/jahid90/my-weather-app/actions/workflows/service-codeql-analysis.yml)

# Weather Application

A simple weather forecast displaying application. Enter the location to lookup the weather for and hit the search button.

## Development

The application uses docker for local development.

To start up the application locally,
```sh
$ docker-compose up -d
```

The application will be available at http://localhost:3000

## Production

The application is hosted on heroku (https://www.heroku.com).

The application can be found at: https://jahiduls-weather-app.herokuapp.com/
