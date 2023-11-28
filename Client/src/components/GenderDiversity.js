import React from 'react';

const GenderDiversity = ({ maleCount, femaleCount }) => {
  // Calculate gender diversity ratio
  const totalEmployees = maleCount + femaleCount;
  const malePercentage = (maleCount / totalEmployees) * 100;
  const femalePercentage = (femaleCount / totalEmployees) * 100;

  return (
    <div>
      <h2>Gender Diversity Ratio</h2>
      {/* Display gender diversity ratio */}
      <p>Male: {malePercentage.toFixed(2)}%</p>
      <p>Female: {femalePercentage.toFixed(2)}%</p>
      {/* Add more elements or visualization as needed */}
    </div>
  );
};

export default GenderDiversity;