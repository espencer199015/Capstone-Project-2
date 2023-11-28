import React from 'react';

const EmployeeProfiles = ({ employees }) => {
  return (
    <div>
      <h2>Employee Profiles</h2>
      {employees.map(employee => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>Employee ID: {employee.id}</p>
          <p>Email: {employee.email}</p>
          {/* Add more employee profile details as needed */}
        </div>
      ))}
    </div>
  );
};

export default EmployeeProfiles;