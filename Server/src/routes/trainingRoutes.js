const express = require('express');
const router = express.Router();
const trainingController = require('../controllers/trainingController');

// Route to get training information
router.get('/training', trainingController.getTrainingData);

// Route to add new training data
router.post('/training', trainingController.addTrainingData);

// Route to update training data by ID
router.put('/training/:id', trainingController.updateTrainingData);

// Route to delete training data by ID
router.delete('/training/:id', trainingController.deleteTrainingData);

// Other routes related to training actions can be added here

module.exports = router;