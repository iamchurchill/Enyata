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
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    client_id: 100,
                    incident_desc: 'This is a test incident',
                    city: 'Accra',
                    country: 'Ghana',
                    date: new Date(),
                    weather_report: JSON.stringify({
                        "coord": {"lon": -0.3302, "lat": 5.5384},
                        "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
                        "base": "stations",
                        "main": {
                            "temp": 299.29,
                            "feels_like": 299.29,
                            "temp_min": 299.29,
                            "temp_max": 299.29,
                            "pressure": 1010,
                            "humidity": 89
                        },
                        "visibility": 10000,
                        "wind": {"speed": 2.06, "deg": 250},
                        "clouds": {"all": 0},
                        "dt": 1667014619,
                        "sys": {"type": 1, "id": 1126, "country": "GH", "sunrise": 1667022409, "sunset": 1667065384},
                        "timezone": 0,
                        "id": 2300721,
                        "name": "Gbawe",
                        "cod": 200
                    }),
                    createdAt: new Date(),
                    updatedAt: new Date(),
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
