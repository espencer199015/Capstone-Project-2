// Import necessary dependencies (e.g., Mongoose)
const mongoose = require('mongoose');

// Define the schema for employee effectiveness or performance metrics
const employeeEffectivenessSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  performanceScore: {
    type: Number,
    required: true,
  },
  // Add other fields relevant to employee effectiveness or performance
  // Example:
  reviewDate: Date,
  // ...and so on
});

// Create a model using the schema
const EmployeeEffectiveness = mongoose.model('EmployeeEffectiveness', employeeEffectivenessSchema);

module.exports = EmployeeEffectiveness;