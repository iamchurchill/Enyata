const axios = require('axios');

module.exports.getIncidents = (request, response, next) => {
    const weather_api_url = process.env.WEATEHER_API_URL;
    let weather_result = {};

    const config = {
        method: 'get',
        url: weather_api_url,
        headers: { }
    };

    axios(config)
        .then(result => {
            console.log(JSON.stringify(result.data));
        })
        .catch(error => {
            console.log('Error: ', error.message);
        });

    response.status(200).json({status: true, message: "Successfully retrieved", data: {}});
}

module.exports.postIncidents = (request, response, next) => {
    response.status(201).json({status: true, message: "Successfully created", data: {}});
}
