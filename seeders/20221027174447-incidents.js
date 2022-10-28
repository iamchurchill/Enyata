'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            'Incidents',
            [
                {
                    client_id: '100',
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    weather_report: {
                        "coord": {
                            "lon": -0.3302,
                            "lat": 5.5384
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "base": "stations",
                        "main": {
                            "temp": 300.29,
                            "feels_like": 304.17,
                            "temp_min": 300.29,
                            "temp_max": 300.29,
                            "pressure": 1013,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {
                            "speed": 4.12,
                            "deg": 220
                        },
                        "clouds": {
                            "all": 20
                        },
                        "dt": 1666913848,
                        "sys": {
                            "type": 1,
                            "id": 1126,
                            "country": "GH",
                            "sunrise": 1666849602,
                            "sunset": 1666892608
                        },
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    },
                },
                {
                    client_id: '100',
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    weather_report: {
                        "coord": {
                            "lon": -0.3302,
                            "lat": 5.5384
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "base": "stations",
                        "main": {
                            "temp": 300.29,
                            "feels_like": 304.17,
                            "temp_min": 300.29,
                            "temp_max": 300.29,
                            "pressure": 1013,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {
                            "speed": 4.12,
                            "deg": 220
                        },
                        "clouds": {
                            "all": 20
                        },
                        "dt": 1666913848,
                        "sys": {
                            "type": 1,
                            "id": 1126,
                            "country": "GH",
                            "sunrise": 1666849602,
                            "sunset": 1666892608
                        },
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    },
                },
                {
                    client_id: '100',
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    weather_report: {
                        "coord": {
                            "lon": -0.3302,
                            "lat": 5.5384
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "base": "stations",
                        "main": {
                            "temp": 300.29,
                            "feels_like": 304.17,
                            "temp_min": 300.29,
                            "temp_max": 300.29,
                            "pressure": 1013,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {
                            "speed": 4.12,
                            "deg": 220
                        },
                        "clouds": {
                            "all": 20
                        },
                        "dt": 1666913848,
                        "sys": {
                            "type": 1,
                            "id": 1126,
                            "country": "GH",
                            "sunrise": 1666849602,
                            "sunset": 1666892608
                        },
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    },
                },
                {
                    client_id: '100',
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    weather_report: {
                        "coord": {
                            "lon": -0.3302,
                            "lat": 5.5384
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "base": "stations",
                        "main": {
                            "temp": 300.29,
                            "feels_like": 304.17,
                            "temp_min": 300.29,
                            "temp_max": 300.29,
                            "pressure": 1013,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {
                            "speed": 4.12,
                            "deg": 220
                        },
                        "clouds": {
                            "all": 20
                        },
                        "dt": 1666913848,
                        "sys": {
                            "type": 1,
                            "id": 1126,
                            "country": "GH",
                            "sunrise": 1666849602,
                            "sunset": 1666892608
                        },
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    },
                },
                {
                    client_id: '100',
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    weather_report: {
                        "coord": {
                            "lon": -0.3302,
                            "lat": 5.5384
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "base": "stations",
                        "main": {
                            "temp": 300.29,
                            "feels_like": 304.17,
                            "temp_min": 300.29,
                            "temp_max": 300.29,
                            "pressure": 1013,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {
                            "speed": 4.12,
                            "deg": 220
                        },
                        "clouds": {
                            "all": 20
                        },
                        "dt": 1666913848,
                        "sys": {
                            "type": 1,
                            "id": 1126,
                            "country": "GH",
                            "sunrise": 1666849602,
                            "sunset": 1666892608
                        },
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    },
                },
                {
                    client_id: '100',
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    weather_report: {
                        "coord": {
                            "lon": -0.3302,
                            "lat": 5.5384
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "base": "stations",
                        "main": {
                            "temp": 300.29,
                            "feels_like": 304.17,
                            "temp_min": 300.29,
                            "temp_max": 300.29,
                            "pressure": 1013,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {
                            "speed": 4.12,
                            "deg": 220
                        },
                        "clouds": {
                            "all": 20
                        },
                        "dt": 1666913848,
                        "sys": {
                            "type": 1,
                            "id": 1126,
                            "country": "GH",
                            "sunrise": 1666849602,
                            "sunset": 1666892608
                        },
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    },
                },
                {
                    client_id: '100',
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    weather_report: {
                        "coord": {
                            "lon": -0.3302,
                            "lat": 5.5384
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "base": "stations",
                        "main": {
                            "temp": 300.29,
                            "feels_like": 304.17,
                            "temp_min": 300.29,
                            "temp_max": 300.29,
                            "pressure": 1013,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {
                            "speed": 4.12,
                            "deg": 220
                        },
                        "clouds": {
                            "all": 20
                        },
                        "dt": 1666913848,
                        "sys": {
                            "type": 1,
                            "id": 1126,
                            "country": "GH",
                            "sunrise": 1666849602,
                            "sunset": 1666892608
                        },
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    },
                },
                {
                    client_id: '100',
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    weather_report: {
                        "coord": {
                            "lon": -0.3302,
                            "lat": 5.5384
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "base": "stations",
                        "main": {
                            "temp": 300.29,
                            "feels_like": 304.17,
                            "temp_min": 300.29,
                            "temp_max": 300.29,
                            "pressure": 1013,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {
                            "speed": 4.12,
                            "deg": 220
                        },
                        "clouds": {
                            "all": 20
                        },
                        "dt": 1666913848,
                        "sys": {
                            "type": 1,
                            "id": 1126,
                            "country": "GH",
                            "sunrise": 1666849602,
                            "sunset": 1666892608
                        },
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    },
                },
                {
                    client_id: '100',
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    weather_report: {
                        "coord": {
                            "lon": -0.3302,
                            "lat": 5.5384
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "base": "stations",
                        "main": {
                            "temp": 300.29,
                            "feels_like": 304.17,
                            "temp_min": 300.29,
                            "temp_max": 300.29,
                            "pressure": 1013,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {
                            "speed": 4.12,
                            "deg": 220
                        },
                        "clouds": {
                            "all": 20
                        },
                        "dt": 1666913848,
                        "sys": {
                            "type": 1,
                            "id": 1126,
                            "country": "GH",
                            "sunrise": 1666849602,
                            "sunset": 1666892608
                        },
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    },
                },
                {
                    client_id: '100',
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    weather_report: {
                        "coord": {
                            "lon": -0.3302,
                            "lat": 5.5384
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "base": "stations",
                        "main": {
                            "temp": 300.29,
                            "feels_like": 304.17,
                            "temp_min": 300.29,
                            "temp_max": 300.29,
                            "pressure": 1013,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {
                            "speed": 4.12,
                            "deg": 220
                        },
                        "clouds": {
                            "all": 20
                        },
                        "dt": 1666913848,
                        "sys": {
                            "type": 1,
                            "id": 1126,
                            "country": "GH",
                            "sunrise": 1666849602,
                            "sunset": 1666892608
                        },
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    },
                },
            ],
            {}
        )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Incidents', null, {})
    }
};
