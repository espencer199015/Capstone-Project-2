const express = require('express');
const app = express();

// Middleware setup (e.g., body parser, logger, etc.)
app.use(express.json());
// Add more middleware if needed

// Define and use routes
const employeeRoutes = require('./routes/employeeRoutes');
const absenteeismRoutes = require('./routes/absenteeismRoutes');
const salaryRoutes = require('./routes/salaryRoutes');
// Import other route files as needed

app.use('/api/employees', employeeRoutes);
app.use('/api/absenteeism', absenteeismRoutes);
app.use('/api/salary', salaryRoutes);
// Use other routes as necessary

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});