'use client'
import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const getChartOptions = () => ({
  series: [350, 80, 200, 54],
  colors: ["#16A085", "#0072C6", "#8E44AD", "#E67E22"],
  chart: {
    height: 400,
    width: "100%",
    type: "donut",
  },
  stroke: {
    colors: ["transparent"],
    lineCap: "",
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontFamily: "Inter, sans-serif",
            offsetY: 20,
          },
          total: {
            showAlways: true,
            show: true,
            label: "Total Revenue",
            color:'#60A5FA',
            fontWeight:'450',
            formatter: function (w: { globals: { seriesTotals: any[]; }; }) {
              const sum = w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0);
              return sum + '$';
            },
          },
          value: {
            show: true,
            fontFamily: "Inter, sans-serif",
            offsetY: -20,
            formatter: function (value: number) {
              return value + "$";
            },
          },
        },
        size: "85%",
      },
    },
  },
  grid: {
    padding: {
      top: -2,
    },
  },
  labels: ["Digital", "Electronics", "Art", "Fashion"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "bottom",
    fontFamily: "Inter, sans-serif",
    fontSize: '14px',
    cssClass: 'text-sm px-2 font-normal fill-gray-500 dark:fill-gray-400',
    markers: {
      width: 12,
      height: 12,
      radius: 4,
    },
  },
  yaxis: {
    labels: {
      formatter: function (value: number) {
        return value + "$";
      },
    },
  },
  xaxis: {
    labels: {
      formatter: function (value: number) {
        return value + "$";
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
});

const Donut: React.FC = () => {
  const [chartOptions, setChartOptions] = useState(getChartOptions());
  const chartRef = useRef<ApexCharts | null>(null);

  useEffect(() => {
    const chart = new ApexCharts(document.getElementById('donut-chart'), chartOptions);
    chart.render();
    chartRef.current = chart;

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartOptions]);
  return (
    <div className="max-w-md bg-gray-50 ring-1 ring-gray-200 rounded-lg shadow-md dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-3">
        <div className="flex justify-center items-center">
          <h5 className="text-xl font-semibold leading-none text-gray-800 dark:text-white pe-1">Category Breakdown</h5>
        </div>
      </div>
        <div id="donut-chart">
      </div>
    </div>
  );
};

export default Donut;
