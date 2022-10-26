const axios = require('axios');

module.exports.getIncidents = (request, response, next) => {
    response.status(200).json({status: true, message: "Successfully retrieved", data: {}});
}

module.exports.postIncidents = (request, response, next) => {
    response.status(201).json({status: true, message: "Successfully created", data: {}});
}
