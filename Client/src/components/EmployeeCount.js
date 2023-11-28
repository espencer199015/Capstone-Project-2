import React from 'react';

const EmployeeCount = ({ totalEmployees }) => {
  return (
    <div>
      <h2>Total Employees</h2>
      <p>{totalEmployees}</p>
    </div>
  );
};

export default EmployeeCount;