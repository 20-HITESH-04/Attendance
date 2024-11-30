import React from 'react';
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function BarChartComponent() {
  // Updated mock data for the bar chart
  const data = [
    { name: '3', TotalPresent: 9, TotalAbsent: 1 },
    { name: '2', TotalPresent: 8, TotalAbsent: 2 },
    { name: '1', TotalPresent: 7, TotalAbsent: 3 },
  ];

  return (
    <div className="flex items-start bg-gray-100 p-6 rounded-lg shadow-xl hover:shadow-lg transition-shadow duration-300">
      <div className="w-full md:w-1/2"> {/* Limits the width of the chart */}
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Attendance</h2>
        <BarChart
          width={600}
          height={300}
          data={data}
          className="transition-transform duration-300 hover:scale-105"
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip cursor={{ fill: '#f3f4f6' }} />
          <Legend wrapperStyle={{ top: 10, right: 10 }} />
          <Bar
            dataKey="TotalPresent"
            fill="#3b82f6"
            animationDuration={1000}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="TotalAbsent"
            fill="#10b981"
            animationDuration={1000}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </div>
    </div>
  );
}

export default BarChartComponent;