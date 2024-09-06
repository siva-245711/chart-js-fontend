import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const neonColors = [
  '#FF00FF', // neon magenta
  '#00FFFF', // neon cyan
  '#39FF14', // neon green
  '#FF1493', // neon pink
  '#FFD700', // neon gold
  '#FF4500', // neon orange
  '#00FF00', // neon lime
  '#00BFFF', // neon blue
  '#FF00FF', // neon purple
  '#FF6347', // neon tomato
  '#7FFF00', // neon chartreuse
  '#1E90FF', // neon dodger blue
];

const demoData = {
  labels: ['Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023'],
  datasets: [
    {
      label: 'Customer Lifetime Value',
      data: [500, 600, 550, 700, 650, 800, 700, 600, 550, 700, 650, 800],
      backgroundColor: neonColors ,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Customer Lifetime Value by Cohorts',
    },
  },
};

function CustomerLifetimeValue() {
  return (
    <div>
      <h2>Customer Lifetime Value by Cohorts</h2>
      <Bar options={options} data={demoData} />
    </div>
  );
}

export default CustomerLifetimeValue;