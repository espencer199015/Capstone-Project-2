// Import necessary dependencies (e.g., Mongoose)
const mongoose = require('mongoose');

// Define the schema for employee profiles
const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Add other fields relevant to an employee profile
  // Example:
  department: String,
  position: String,
  dateOfBirth: Date,
  // ...and so on
});

// Create a model using the schema
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;