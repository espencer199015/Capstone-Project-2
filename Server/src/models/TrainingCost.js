// Import necessary dependencies (e.g., Mongoose)
const mongoose = require('mongoose');

// Define the schema for training-related expenses or trends
const trainingCostSchema = new mongoose.Schema({
  trainingType: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // Add other fields relevant to training-related expenses or trends
  // Example:
  description: String,
  // ...and so on
});

// Create a model using the schema
const TrainingCost = mongoose.model('TrainingCost', trainingCostSchema);

module.exports = TrainingCost;