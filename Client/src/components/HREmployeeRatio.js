import React from 'react';

const HREmployeeRatio = ({ hrCount, totalEmployees }) => {
  // Calculate the HR-to-employee ratio
  const hrEmployeeRatio = hrCount / totalEmployees;

  return (
    <div>
      <h2>HR to Employee Ratio</h2>
      {/* Display HR-to-employee ratio or related data */}
      <p>HR count: {hrCount}</p>
      <p>Total employees: {totalEmployees}</p>
      <p>HR to Employee Ratio: {hrEmployeeRatio.toFixed(2)}</p>
      {/* Add more elements or visualization as needed */}
    </div>
  );
};

export default HREmployeeRatio;