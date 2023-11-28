// Import necessary dependencies (e.g., Mongoose)
const mongoose = require('mongoose');

// Define the schema for HR-to-employee ratio data
const hrEmployeeRatioSchema = new mongoose.Schema({
  hrCount: {
    type: Number,
    required: true,
  },
  totalEmployees: {
    type: Number,
    required: true,
  },
  // Add other fields relevant to HR-to-employee ratio data if needed
  // Example:
  calculationDate: Date,
  // ...and so on
});

// Create a model using the schema
const HREmployeeRatio = mongoose.model('HREmployeeRatio', hrEmployeeRatioSchema);

module.exports = HREmployeeRatio;