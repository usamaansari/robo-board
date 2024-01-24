"use client"

import React from 'react'
import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    RoboGripper: 8000,
    AORobo: 1438,
  },
  {
    name: 'Tuesday',
    RoboGripper: 7000,
    AORobo: 1498,
    
  },
  {
    name: 'Wednesday',
    RoboGripper: 1000,
    AORobo: 1998,
  },
  {
    name: 'Thursday',
    RoboGripper: 6000,
    AORobo: 1698,
  },
  {
    name: 'Friday',
    RoboGripper: 5000,
    AORobo: 1598,
  },
  {
    name: 'Saturday',
    RoboGripper: 2000,
    AORobo: 1298,
  },
  {
    name: 'Sunday',
    RoboGripper: 4000,
    AORobo: 1498,
  },
];


const Chart = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Weekly Recap</h2>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
         {/*  <CartesianGrid strokeDasharray="3 3" />*/}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: "#151c2c", border:"none"}} />
          <Legend />
          <Line type="monotone" dataKey="RoboGripper" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="AORobo" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
        
    </div>
  )
}

export default Chart