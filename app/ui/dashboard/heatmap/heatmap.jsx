"use client";

import React from 'react';
import Chart from "react-apexcharts";
import styles from "./heatmap.module.css";

//https://apexcharts.com/react-chart-demos/heatmap-charts/basic/

function generateData(count, range) {
    if (typeof count !== 'number' || count <= 0 || !Number.isInteger(count)) {
      throw new Error('Invalid count. Count must be a positive integer.');
    }
  
    if (
      !range ||
      typeof range !== 'object' ||
      typeof range.min !== 'number' ||
      typeof range.max !== 'number' ||
      range.min > range.max
    ) {
      throw new Error('Invalid range. Provide an object with valid min and max properties.');
    }
  
    const result = [];
    for (let i = 0; i < count; i++) {
      const randomValue = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      result.push(randomValue);
    }
  
    return result;
  }

const state = {
          
    series: [{
      name: 'Metric1',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric2',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric3',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric4',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric5',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric6',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric7',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric8',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric9',
      data: generateData(18, {
        min: 0,
        max: 90
      })
    }
    ],
    options: {
      chart: {
        height: 350,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: true
      },
      colors: ["#eb8034"],
      title: {
        text: 'HeatMap Chart (Mushroom Availability)'
      },
    },
  
  
  };
const Heatmap = () => {
  return (
    <div className={styles.container}>
    <h2 className={styles.title}>HeatMap Chart (Mushroom Availability) </h2>
        <Chart options={state.options} series={state.series} type="heatmap" height={350} />
    </div>
  )
}

export default Heatmap