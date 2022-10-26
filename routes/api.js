const express = require('express');
const incidentController = require('../controllers/api/v1/');

const router = express.Router();

router.get('/incidents', incidentController.getIncidents);

router.post('/incident/add', incidentController.postIncidents);

module.exports = router;
