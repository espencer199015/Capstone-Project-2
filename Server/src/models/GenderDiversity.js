// Import necessary dependencies (e.g., Mongoose)
const mongoose = require('mongoose');

// Define the schema for gender diversity data
const genderDiversitySchema = new mongoose.Schema({
  maleCount: {
    type: Number,
    required: true,
  },
  femaleCount: {
    type: Number,
    required: true,
  },
  // Add other fields relevant to gender diversity data if needed
  // Example:
  otherGenderCount: Number,
  // ...and so on
});

// Create a model using the schema
const GenderDiversity = mongoose.model('GenderDiversity', genderDiversitySchema);

module.exports = GenderDiversity;