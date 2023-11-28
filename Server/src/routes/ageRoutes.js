const express = require('express');
const router = express.Router();
const ageController = require('../controllers/ageController');

// Route to calculate average employee age
router.get('/average-age', ageController.calculateAverageAge);

// Other routes related to age calculations or data can be added here

module.exports = router;