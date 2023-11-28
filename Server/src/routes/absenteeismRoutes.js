const express = require('express');
const router = express.Router();
const absenteeismController = require('../controllers/absenteeismController');

// Route to get absenteeism statistics or trends
router.get('/absenteeism', absenteeismController.getAbsenteeismData);

// Route to add new absenteeism data
router.post('/absenteeism', absenteeismController.addAbsenteeismData);

// Route to update absenteeism data by ID
router.put('/absenteeism/:id', absenteeismController.updateAbsenteeismData);

// Route to delete absenteeism data by ID
router.delete('/absenteeism/:id', absenteeismController.deleteAbsenteeismData);

// Other routes related to absenteeism actions can be added here

module.exports = router;