import React from 'react';
import EmployeeCount from './EmployeeCount';
import EmployeeProfiles from './EmployeeProfiles';
import Absenteeism from './Absenteeism';
import SalaryRange from './SalaryRange';
import OvertimeHours from './OvertimeHours'; // Update the import path based on your folder structure
import AverageAge from './AverageAge'; // Update the import path based on your folder structure
import TrainingCosts from './TrainingCosts'; // Update the import path based on your folder structure
import GenderDiversity from './GenderDiversity'; // Update the import path based on your folder structure
import EmployeeEffectiveness from './EmployeeEffectiveness'; // Update the import path based on your folder structure
import HREmployeeRatio from './HREmployeeRatio'; // Update the import path based on your folder structure
import TopEmployees from './TopEmployees'; // Update the import path based on your folder structure
import './styles/DashboardPage.css'; // Import the corresponding CSS file

const Dashboard = () => {
  // Sample data for top-performing employees
  const topEmployeesData = [
    { name: 'John Doe', performanceScore: 95 },
    { name: 'Jane Smith', performanceScore: 92 },
    // Add more objects with employee details as needed
  ];

  // Sample HR and employee count data
  const hrCount = 10;
  const totalEmployees = 100;

  // Sample effectiveness ratio data
  const effectivenessRatio = "Employee effectiveness ratio: 75%";

  // Sample gender count data
  const maleCount = 150;
  const femaleCount = 100;

  // Sample training expense data
  const trainingExpenses = "Training costs: $50,000";

  // Sample employee ages data
  const employeeAges = [25, 30, 28, 35, 22];

  // Sample overtime data
  const overtimeData = "Total overtime hours: 200";

  // Sample salary range data
  const salaryData = ['$50k - $60k', '$60k - $70k', '$70k - $80k'];

  // Sample absenteeism data
  const absenteeismData = "Absenteeism rate: 10%";

  // Sample employee data
  const employees = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more employee objects as needed
  ];

  return (
    <div>
      <h1>HR Dashboard</h1>
      {/* Render different components and pass necessary props */}
      <TopEmployees topEmployeesData={topEmployeesData} />
      <HREmployeeRatio hrCount={hrCount} totalEmployees={totalEmployees} />
      <EmployeeEffectiveness effectivenessRatio={effectivenessRatio} />
      <GenderDiversity maleCount={maleCount} femaleCount={femaleCount} />
      <TrainingCosts trainingExpenses={trainingExpenses} />
      <AverageAge employeeAges={employeeAges} />
      <OvertimeHours overtimeData={overtimeData} />
      <SalaryRange salaryData={salaryData} />
      <Absenteeism absenteeismData={absenteeismData} />
      <EmployeeProfiles employees={employees} />
      <EmployeeCount totalEmployees={totalEmployees} />
    </div>
  );
};

export default Dashboard;