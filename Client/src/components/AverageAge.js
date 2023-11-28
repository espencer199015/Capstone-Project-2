import React from 'react';

const AverageAge = ({ employeeAges }) => {
  // Calculate the average age
  const calculateAverageAge = () => {
    if (employeeAges.length === 0) {
      return 'No employee data available';
    }

    const totalAges = employeeAges.reduce((acc, age) => acc + age, 0);
    const averageAge = totalAges / employeeAges.length;
    return `Average age: ${averageAge.toFixed(2)}`;
  };

  return (
    <div>
      <h2>Average Age of Employees</h2>
      {/* Display the average age */}
      <p>{calculateAverageAge()}</p>
      {/* Add more elements or logic as needed */}
    </div>
  );
};

export default AverageAge;