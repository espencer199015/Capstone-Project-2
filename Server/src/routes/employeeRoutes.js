const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Route to get all employees
router.get('/employees', employeeController.getAllEmployees);

// Route to get a specific employee by ID
router.get('/employees/:id', employeeController.getEmployeeById);

// Route to create a new employee
router.post('/employees', employeeController.createEmployee);

// Route to update an existing employee by ID
router.put('/employees/:id', employeeController.updateEmployeeById);

// Route to delete an employee by ID
router.delete('/employees/:id', employeeController.deleteEmployeeById);

// Other routes related to employees can be added here

module.exports = router;