import React from 'react';
import { GraduationCap, BarChart, Percent } from 'lucide-react'; // Import necessary icons

function Card({ title, value, icon }) {
  return (
    <div className="flex-1 p-4 bg-blue-100 rounded-lg shadow-md flex items-center gap-4">
      <div className="bg-white p-3 rounded-full">
        {/* Render the icon passed as prop */}
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="flex gap-4">
      {/* Passing Lucide React icons as props */}
      <Card title="Total Student" value="10" icon={<GraduationCap className="h-6 w-6 text-purple-500" />} />
      <Card title="Total % Present" value="60.0" icon={<BarChart className="h-6 w-6 text-green-500" />} />
      <Card title="Total % Absent" value="40.0" icon={<Percent className="h-6 w-6 text-red-500" />} />
    </div>
  );
}

export default Dashboard;