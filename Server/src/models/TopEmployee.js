// Import necessary dependencies (e.g., Mongoose)
const mongoose = require('mongoose');

// Define the schema for top-performing employees
const topEmployeesSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  performanceScore: {
    type: Number,
    required: true,
  },
  // Add other fields relevant to top-performing employees if needed
  // Example:
  ranking: Number,
  // ...and so on
});

// Create a model using the schema
const TopEmployees = mongoose.model('TopEmployees', topEmployeesSchema);

module.exports = TopEmployees;