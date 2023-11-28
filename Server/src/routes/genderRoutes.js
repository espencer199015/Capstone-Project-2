const express = require('express');
const router = express.Router();
const genderController = require('../controllers/genderController');

// Route to get gender diversity information
router.get('/gender', genderController.getGenderData);

// Route to update gender diversity data by ID
router.put('/gender/:id', genderController.updateGenderData);

// Other routes related to gender actions can be added here

module.exports = router;