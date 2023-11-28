const express = require('express');
const router = express.Router();
const overtimeController = require('../controllers/overtimeController');

// Route to get overtime data
router.get('/overtime', overtimeController.getOvertimeData);

// Route to add new overtime data
router.post('/overtime', overtimeController.addOvertimeData);

// Route to update overtime data by ID
router.put('/overtime/:id', overtimeController.updateOvertimeData);

// Route to delete overtime data by ID
router.delete('/overtime/:id', overtimeController.deleteOvertimeData);

// Other routes related to overtime actions can be added here

module.exports = router;