// Import necessary dependencies (e.g., Mongoose)
const mongoose = require('mongoose');

// Define the schema for overtime hours data
const overtimeSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  hoursWorked: {
    type: Number,
    required: true,
  },
  // Add other fields relevant to overtime hours data
  // Example:
  reason: String,
  // ...and so on
});

// Create a model using the schema
const Overtime = mongoose.model('Overtime', overtimeSchema);

module.exports = Overtime;