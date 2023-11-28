import React from 'react';

const EmployeeEffectiveness = ({ effectivenessRatio }) => {
  return (
    <div>
      <h2>Employee Effectiveness Ratio</h2>
      {/* Display effectiveness ratio or performance metrics */}
      <p>{effectivenessRatio}</p>
      {/* Add more elements or visualization as needed */}
    </div>
  );
};

export default EmployeeEffectiveness;