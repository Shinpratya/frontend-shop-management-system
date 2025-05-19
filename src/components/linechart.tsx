import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    value: 2400,
  },
  {
    name: "Page B",
    value: 1398,
  },
  {
    name: "Page C",
    value: 9800,
  },
  {
    name: "Page D",
    value: 3908,
  },
  {
    name: "Page E",
    value: 4800,
  },
  {
    name: "Page F",
    value: 3800,
  },
  {
    name: "Page G",
    value: 4300,
  },
];

const Linechart = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <LineChart
        width={750}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </div>
  );
};

export default Linechart;
