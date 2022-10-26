const express = require('express');
const apiRoutes = require('../controllers/api/v1/');

const router = express.Router();

router.get('/incidents', apiRoutes.getIncidents);

router.post('/incident/add', apiRoutes.postIncidents);

module.exports = router;
