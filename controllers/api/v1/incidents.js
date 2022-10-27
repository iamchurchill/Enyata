const axios = require('axios');
const {sequelize, Sequelize, Incidents} = require('../../../models')
const {validationResult} = require('express-validator');

module.exports.getIncidents = async (request, response, next) => {
    Incidents.findAll().then((result) => {
        console.log(result);
        response.status(200).json({status: true, message: "Successfully retrieved", data: result});
    }).catch(error => {
        console.error('Oops!! something happened %s ', error.message);
    });
}

module.exports.postIncidents = (request, response, next) => {
    const {WEATHER_API_URL, WEATHER_API_KEY, WEATHER_LAT, WEATHER_LNG} = process.env;
    const {client_id, incident_desc, city, country} = request.body;
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({status: false, errors: errors.array()})
    }
    axios.get(WEATHER_API_URL, {
        params: {
            lat: WEATHER_LAT,
            lon: WEATHER_LNG,
            appid: WEATHER_API_KEY,
        }
    })
        .then(weather_report => {
            Incidents.create({
                client_id: client_id,
                incident_desc: incident_desc,
                city: city,
                country: country,
                weather_report: weather_report
            }).then(result => {
                response.status(201).json({status: true, message: "Successfully created", data: result});
            }).catch(error => {
                console.error('Oops!! something happened %s ', error.message);
            });
        })
        .catch(error => {
            console.error('Oops!! something happened %s ', error.message);
        });
}
