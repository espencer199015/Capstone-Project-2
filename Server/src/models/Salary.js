// Import necessary dependencies (e.g., Mongoose)
const mongoose = require('mongoose');

// Define the schema for salary information
const salarySchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  // Add other fields relevant to salary information
  // Example:
  position: String,
  effectiveDate: Date,
  // ...and so on
});

// Create a model using the schema
const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary;