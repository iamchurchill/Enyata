const axios = require('axios');
const {Incidents} = require('../../../models')
const {validationResult} = require('express-validator');

module.exports.getIncidents = async (request, response) => {
    Incidents.findAll().then((incidents) => {
        if (incidents.length === 0) {
            return response.status(200).json({status: false, message: "No data found"});
        }
        return response.status(200).json({status: true, message: "Incidents retrieved successfully", data: incidents});
    }).catch(error => {
        return response.status(500).json({status: false, message: error.message});
    });
}

module.exports.postIncident = (request, response) => {
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
            if (weather.status !== 200) {
                return response.status(500).json({status: false, message: "Error getting weather report"});
            }
            Incidents.create({
                client_id: client_id,
                incident_desc: incident_desc,
                city: city,
                country: country,
                date: Date.now(),
                weather_report: weather.data
            }).then(incident => {
                return response.status(201).json({
                    status: true,
                    message: "Incident created successfully",
                    data: incident
                });
            }).catch(error => {
                return response.status(500).json({status: false, message: error.message});
            });
        })
        .catch(error => {
            return response.status(500).json({status: false, message: error.message});
        });
}
