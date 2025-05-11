import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', thisMonth: 260, lastMonth: 300 },
  { name: 'Feb', thisMonth: 320, lastMonth: 280 },
  { name: 'Mar', thisMonth: 200, lastMonth: 460 },
  { name: 'Apr', thisMonth: 360, lastMonth: 400 },
  { name: 'May', thisMonth: 310, lastMonth: 370 },
  { name: 'Jun', thisMonth: 220, lastMonth: 320 },
];

const SpendingChart = () => {
  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: '#fff',
        borderRadius: '20px',
        boxShadow: '0 0 20px rgba(0,0,0,0.05)',
        color: '#111',
        // height:"100%"
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <h2 style={{ fontSize: '12px', fontWeight: 'bold', margin: 0 }}>
          Spending
        </h2>
        <button
          style={{
            background: 'none',
            border: 'none',
            fontSize: '14px',
            cursor: 'pointer',
            color: '#444',
          }}
        >
        <IoIosArrowDropright size={16} style={{ cursor: "pointer" }}/>
        </button>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: '#888' }}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <YAxis
            tick={{ fontSize: 12, fill: '#888' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="thisMonth"
            stroke="#000"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="lastMonth"
            stroke="#ccc"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '10px',
          fontSize: '14px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px',fontSize:"10px" }}>
          <span
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#000',
              borderRadius: '50%',
              
            }}
          ></span>
          This Month
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px',fontSize:"10px" }}>
          <span
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#ccc',
              borderRadius: '50%',
            }}
          ></span>
          Last Month
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;
