const express = require('express');
const incidentController = require('../controllers/api/v1/incidents');
const {body} = require('express-validator');

const router = express.Router();

router.get('/', incidentController.getIncidents);

router.get('/incidents', incidentController.getIncidents);

router.post('/incident/store',
    [
        body('client_id', 'Client id is required').not().isEmpty().trim().isNumeric(),
        body('incident_desc').isString().withMessage('Incident description is required'),
        body('city').not().isEmpty().trim().isString().withMessage('City is required'),
        body('country').not().isEmpty().trim().isString().withMessage('Country is required'),
    ], incidentController.postIncident);

module.exports = router;
