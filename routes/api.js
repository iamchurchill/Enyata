const express = require('express');
const incidentController = require('../controllers/api/v1/incidents');
const {body} = require('express-validator');

const router = express.Router();

router.get('/', incidentController.getIncidents);

router.get('/incidents', incidentController.getIncidents);

router.post('/incident/store',
    [
        body('client_id', 'Client id is required').trim().notEmpty().withMessage('client id is required').bail().isNumeric().withMessage('client is should be an integer'),
        body('incident_desc').trim().isString().withMessage('Incident description is required'),
        body('city').trim().not().isEmpty().trim().isString().withMessage('City is required'),
        body('country').trim().not().isEmpty().trim().isString().withMessage('Country is required'),
    ], incidentController.postIncident);

module.exports = router;
