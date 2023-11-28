// Import necessary dependencies (e.g., Mongoose)
const mongoose = require('mongoose');

// Define the schema for absenteeism statistics or trends
const absenteeismSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  hoursAbsent: {
    type: Number,
    required: true,
  },
  // Add other fields relevant to absenteeism statistics or trends
  // Example:
  reason: String,
  // ...and so on
});

// Create a model using the schema
const Absenteeism = mongoose.model('Absenteeism', absenteeismSchema);

module.exports = Absenteeism;