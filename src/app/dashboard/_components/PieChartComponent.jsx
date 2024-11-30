import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

function PieChartComponent() {
  // Mock data for the pie chart
  const data = [
    { name: 'Present (%)', value: 60 },
    { name: 'Absent (%)', value: 40 },
  ];

  // Colors for each segment
  const COLORS = ['#3b82f6', '#f87171']; // Blue for Present, Red for Absent

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-xl hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Attendance Breakdown</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          fill="#82ca9d"
          label={(entry) => `${entry.name}: ${entry.value}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default PieChartComponent;