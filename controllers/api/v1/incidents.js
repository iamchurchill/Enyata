const axios = require('axios');
const {sequelize, Sequelize, User} = require('../../../models')
const {validationResult} = require('express-validator');

module.exports.getIncidents = (request, response, next) => {
    const {WEATHER_API_URL,WEATHER_API_KEY, WEATHER_LAT, WEATHER_LNG } = process.env;
    axios.get(WEATHER_API_URL, {
        params: {
            lat: WEATHER_LAT,
            lon: WEATHER_LNG,
            appid: WEATHER_API_KEY,
        }
    })
        .then(result => {
            console.log(result.data);
            response.status(200).json({status: true, message: "Successfully retrieved", data: {}});
        })
        .catch(error => {
            console.error('Oops!! something happened %s ', error.message);
        });
}

module.exports.postIncidents = (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({status: false, errors: errors.array()})
    }
    response.status(201).json({status: true, message: "Successfully created", data: {}});
}
