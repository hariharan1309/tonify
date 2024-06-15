'use client';
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import ApexCharts from 'apexcharts';

const Graph: React.FC = () => {
  const [chartOptions, setChartOptions] = useState(getChartOptions());
  const chartRef = useRef<ApexCharts | null>(null);

  useEffect(() => {
    const options = {
      chart: {
        height: '100%',
        width: '100%', // Corrected Width to lowercase 'width'
        type: 'line',
        fontFamily: 'Inter, sans-serif',
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
          format: 'dd MMM', // Show the date format
        },
        y: {
          formatter: (val) => `$${val.toLocaleString()}`, // Format values as currency
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 2,
        },
      },
      series: [
        {
          name: 'Digital',
          data: [100, 120, 90, 110, 130, 140, 100, 150, 170, 180, 190, 200],
          color: '#10B981',
        },
        {
          name: 'Art',
          data: [60, 50, 55, 65, 70, 75, 80, 85, 95, 100, 105, 110],
          color: '#7E3AF2',
        },
        {
          name: 'Fashion',
          data: [150, 160, 155, 165, 170, 175, 180, 190, 200, 210, 220, 230],
          color: '#F97316',
        },
        {
          name: 'Electronics',
          data: [80, 85, 90, 100, 95, 105, 110, 115, 120, 125, 130, 135],
          color: '#1A56DB',
        },
      ],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif',
        cssClass: 'text-sm px-2 font-normal fill-gray-500 dark:fill-gray-400',
        markers: {
          width: 12,
          height: 12,
          radius: 4,
        },
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          formatter: (val) => `$${val}`,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    };

    const chart = new ApexCharts(document.getElementById('line-chart'), options);
    chart.render();
    chartRef.current = chart;

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="max-w-md bg-gray-50 ring-1 ring-gray-200 rounded-lg shadow-md dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-3">
        <h5 className="text-xl font-semibold leading-none text-gray-800 dark:text-white pe-1">Sales Analysis</h5>
      </div>
      <div id="line-chart"></div>
    </div>
  );
};

export default Graph;
