const express = require('express');
const incidentController = require('../controllers/api/v1/incidents');
const {body} = require('express-validator');

const router = express.Router();

router.get('/', incidentController.getWelcome);

router.get('/api/v1/incidents', incidentController.getIncidents);

router.post
(
    '/api/v1/incident/store',
    [
        body('client_id').trim().notEmpty().withMessage('Client id is required').bail().isNumeric().withMessage('Client id should be an number'),
        body('incident_desc').trim().notEmpty().withMessage('Description is required').isString().withMessage('Description should be a string'),
        body('city').trim().notEmpty().withMessage('City is required').isString().withMessage('City should be a string'),
        body('country').trim().notEmpty().withMessage('Country is required').isString().withMessage('Country should be a string'),
    ],
    incidentController.postIncident
);

module.exports = router;
