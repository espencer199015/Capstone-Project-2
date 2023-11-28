import React from 'react';
import EmployeeCount from './EmployeeCount'; // Update the import path based on your folder structure
import EmployeeProfiles from './EmployeeProfiles'; // Update the import path based on your folder structure
import Absenteeism from './Absenteeism'; // Update the import path based on your folder structure
import SalaryRange from './SalaryRange'; // Update the import path based on your folder structure
import OvertimeHours from './OvertimeHours'; // Update the import path based on your folder structure
import AverageAge from './AverageAge'; // Update the import path based on your folder structure
import TrainingCosts from './TrainingCosts'; // Update the import path based on your folder structure
import GenderDiversity from './GenderDiversity'; // Update the import path based on your folder structure
import EmployeeEffectiveness from './EmployeeEffectiveness'; // Update the import path based on your folder structure
import HREmployeeRatio from './HREmployeeRatio'; // Update the import path based on your folder structure
import TopEmployees from './TopEmployees'; // Update the import path based on your folder structure

const Dashboard = () => {
  // Sample data for top-performing employees (replace this with your actual data)
  const topEmployeesData = [
    { name: 'John Doe', performanceScore: 95 },
    { name: 'Jane Smith', performanceScore: 92 },
    // Add more objects with employee details as needed
  ];

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the TopEmployees component and pass topEmployeesData as a prop */}
      <TopEmployees topEmployeesData={topEmployeesData} />
      {/* Other dashboard components */}
    </div>
  );
};

const Dashboard = () => {
  // Sample HR and employee count data (replace this with your actual data)
  const hrCount = 10;
  const totalEmployees = 100;

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the HREmployeeRatio component and pass hrCount and totalEmployees as props */}
      <HREmployeeRatio hrCount={hrCount} totalEmployees={totalEmployees} />
      {/* Other dashboard components */}
    </div>
  );
};

const Dashboard = () => {
  // Sample effectiveness ratio data (replace this with your actual data)
  const effectivenessRatio = "Employee effectiveness ratio: 75%"; // Example data - replace this

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the EmployeeEffectiveness component and pass effectivenessRatio as a prop */}
      <EmployeeEffectiveness effectivenessRatio={effectivenessRatio} />
      {/* Other dashboard components */}
    </div>
  );
};

const Dashboard = () => {
  // Sample gender count data (replace this with your actual data)
  const maleCount = 150;
  const femaleCount = 100;

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the GenderDiversity component and pass maleCount and femaleCount as props */}
      <GenderDiversity maleCount={maleCount} femaleCount={femaleCount} />
      {/* Other dashboard components */}
    </div>
  );
};

const Dashboard = () => {
  // Sample training expense data (replace this with your actual data)
  const trainingExpenses = "Training costs: $50,000"; // Example data - replace this

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the TrainingCosts component and pass trainingExpenses as a prop */}
      <TrainingCosts trainingExpenses={trainingExpenses} />
      {/* Other dashboard components */}
    </div>
  );
};

const Dashboard = () => {
  // Sample employee ages data (replace this with your actual data)
  const employeeAges = [25, 30, 28, 35, 22]; // Example data - replace this

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the AverageAge component and pass employeeAges as a prop */}
      <AverageAge employeeAges={employeeAges} />
      {/* Other dashboard components */}
    </div>
  );
};

const Dashboard = () => {
  // Sample overtime data (replace this with your actual data)
  const overtimeData = "Total overtime hours: 200"; // Example data - replace this

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the OvertimeHours component and pass overtimeData as a prop */}
      <OvertimeHours overtimeData={overtimeData} />
      {/* Other dashboard components */}
    </div>
  );
};

const Dashboard = () => {
  // Sample salary range data (replace this with your actual data)
  const salaryData = ['$50k - $60k', '$60k - $70k', '$70k - $80k']; // Example data - replace this

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the SalaryRange component and pass salaryData as a prop */}
      <SalaryRange salaryData={salaryData} />
      {/* Other dashboard components */}
    </div>
  );
};

const Dashboard = () => {
  // Sample absenteeism data (replace this with your actual data)
  const absenteeismData = "Absenteeism rate: 10%"; // Example data - replace this

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the Absenteeism component and pass absenteeismData as a prop */}
      <Absenteeism absenteeismData={absenteeismData} />
      {/* Other dashboard components */}
    </div>
  );
};

const Dashboard = () => {
  // Sample employee data (replace this with your actual employee data)
  const employees = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more employee objects as needed
  ];

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the EmployeeProfiles component and pass employees as a prop */}
      <EmployeeProfiles employees={employees} />
      {/* Other dashboard components */}
    </div>
  );
};

const Dashboard = () => {
  // Get the total number of employees (this can come from state or API)
  const totalEmployees = 100; // Replace this with your actual employee count

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render the EmployeeCount component and pass totalEmployees as a prop */}
      <EmployeeCount totalEmployees={totalEmployees} />
      {/* Other dashboard components */}
    </div>
  );
};

export default Dashboard;