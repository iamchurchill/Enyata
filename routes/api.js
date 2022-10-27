const express = require('express');
const incidentController = require('../controllers/api/v1/incidents');
const {body, validationResult} = require('express-validator');

const router = express.Router();

router.get('/', incidentController.getIncidents);

router.get('/incidents', incidentController.getIncidents);

router.post('/incident/add',
    [
        body('client_id', 'Client ID is required').not().isEmpty().trim().isNumeric(),
        body('incident_desc').isString().withMessage('Incident description is required'),
        body('city').isString().withMessage('Incident description is required'),
        body('country').isString().withMessage('Incident description is required'),
    ], incidentController.postIncidents);

module.exports = router;
