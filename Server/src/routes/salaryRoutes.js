const express = require('express');
const router = express.Router();
const salaryController = require('../controllers/salaryController');

// Route to get salary information
router.get('/salary', salaryController.getSalaryData);

// Route to update salary information by ID
router.put('/salary/:id', salaryController.updateSalaryData);

// Route to delete salary information by ID
router.delete('/salary/:id', salaryController.deleteSalaryData);

// Other routes related to salary actions can be added here

module.exports = router;