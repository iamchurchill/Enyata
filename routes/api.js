const express = require('express');
const apiRoutes = require('../controllers/api/v1/');

const router = express.Router();

router.get('', apiRoutes.getIncidents);

router.post('', apiRoutes.postIncidents);

module.exports = router;
