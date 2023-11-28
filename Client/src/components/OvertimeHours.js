import React from 'react';

const OvertimeHours = ({ overtimeData }) => {
  return (
    <div>
      <h2>Overtime Hours</h2>
      {/* Display overtime-related data */}
      <p>{overtimeData}</p>
      {/* Add more elements or visualization as needed */}
    </div>
  );
};

export default OvertimeHours;