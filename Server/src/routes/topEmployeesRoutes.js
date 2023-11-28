const express = require('express');
const router = express.Router();
const topEmployeesController = require('../controllers/topEmployeesController');

// Route to get information about top-performing employees
router.get('/top-employees', topEmployeesController.getTopEmployeesData);

// Other routes related to top employees actions can be added here

module.exports = router;