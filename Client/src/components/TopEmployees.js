import React from 'react';

const TopEmployees = ({ topEmployeesData }) => {
  return (
    <div>
      <h2>Top Performing Employees</h2>
      {/* Display information about top-performing employees */}
      <ul>
        {topEmployeesData.map((employee, index) => (
          <li key={index}>
            {employee.name} - Performance Score: {employee.performanceScore}
          </li>
        ))}
      </ul>
      {/* Add more elements or visualization as needed */}
    </div>
  );
};

export default TopEmployees;