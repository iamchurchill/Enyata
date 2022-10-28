const axios = require('axios');
const {Incidents} = require('../../../models')
const {validationResult} = require('express-validator');

module.exports.getIncidents = async (request, response) => {
    Incidents.findAll().then((result) => {
        if (result.length === 0) {
            return response.status(200).json({status: false, message: "No data found"});
        }
        return response.status(200).json({status: true, message: "Incidents retrieved successfully", data: result});
    }).catch(error => {
        return response.status(500).json({status: true, message: error.message});
    });
}

module.exports.postIncidents = (request, response) => {
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
        .then(weather => {
            console.log(weather.status);
            console.log(weather.statusText);
            if (weather.status !== 200) {
                return response.status(500).json({status: false, message: "Something happened getting weather report"});
            }
            Incidents.create({
                client_id: client_id,
                incident_desc: incident_desc,
                city: city,
                country: country,
                date: Date.now(),
                weather_report: weather.data
            }).then(data => {
                return response.status(201).json({status: true, message: "Incident created successfully", data: data});
            }).catch(error => {
                return response.status(500).json({status: true, message: error.message});
            });
        })
        .catch(error => {
            return response.status(500).json({status: true, message: error.message});
        });
}
