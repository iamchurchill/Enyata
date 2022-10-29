const express = require('express');
const incidentController = require('../controllers/api/v1/incidents');
const {body} = require('express-validator');

const router = express.Router();

router.get('/', incidentController.getIncidents);

router.get('/incidents', incidentController.getIncidents);

router.post('/incident/store',
    [
        body('client_id', 'Client id is required').trim().notEmpty().withMessage('client id is required').bail().isNumeric().withMessage('client is should be an integer'),
        body('incident_desc').trim().notEmpty().withMessage('incident description is required').isString().withMessage('string required'),
        body('city').trim().notEmpty().withMessage('city is required').isString().withMessage('string required'),
        body('country').trim().notEmpty().withMessage('country is required').isString().withMessage('string required'),
    ], incidentController.postIncident);

module.exports = router;
