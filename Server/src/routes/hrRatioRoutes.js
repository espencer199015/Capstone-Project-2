const express = require('express');
const router = express.Router();
const hrRatioController = require('../controllers/hrRatioController');

// Route to get HR-to-employee ratio information
router.get('/hr-ratio', hrRatioController.getHrRatioData);

// Route to update HR-to-employee ratio data by ID
router.put('/hr-ratio/:id', hrRatioController.updateHrRatioData);

// Other routes related to HR ratio actions can be added here

module.exports = router;