const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f35c50dc2877c1b01909447d709524f7&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the network', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(
                undefined,
                `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out but it feels like ${body.current.feelslike} degrees out. There is a ${body.current.precip}% chance of rain.`
            );
        }
    })
}

module.exports = forecast;