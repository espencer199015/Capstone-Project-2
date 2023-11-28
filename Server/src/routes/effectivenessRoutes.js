const express = require('express');
const router = express.Router();
const effectivenessController = require('../controllers/effectivenessController');

// Route to get employee effectiveness data
router.get('/effectiveness', effectivenessController.getEffectivenessData);

// Route to update employee effectiveness data by ID
router.put('/effectiveness/:id', effectivenessController.updateEffectivenessData);

// Other routes related to effectiveness actions can be added here

module.exports = router;