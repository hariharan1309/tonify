'use client'
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const Graph: React.FC = () => {
  useEffect(() => {
    const options = {
      chart: {
        height: '100%',
        Width: '100%',
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
          formatter: (val: { toLocaleString: () => any; }) => `$${val.toLocaleString()}`, // Format values as currency
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
            cssClass: 'text-xs  font-normal fill-gray-500 dark:fill-gray-400',
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
          formatter: (val: any) => `$${val}`,
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

    return () => chart.destroy();
  }, []);

  return (
    <div className=" w-full bg-gray-50 ring-1 ring-gray-200 rounded-lg shadow-md dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-5">
      <h5 className="text-xl font-semibold leading-none text-gray-800 dark:text-white pe-1">Sales Analysis</h5>
      </div>
      <div id="line-chart"></div>
      {/* <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-2.5">
        <div className="pt-5">
          <a
            href="#"
            className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-3.5 h-3.5 text-white me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
            View full report
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Graph;
