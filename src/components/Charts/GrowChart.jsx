import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    CompayA: 4000,
    CompayB: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    CompayA: 3000,
    CompayB: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    CompayA: 2000,
    CompayB: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    CompayA: 2780,
    CompayB: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    CompayA: 1890,
    CompayB: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    CompayA: 2390,
    CompayB: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    CompayA: 3490,
    CompayB: 4300,
    amt: 2100,
  },
];

export function GrowChart() {
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="CompayA" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="CompayB" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}
// export function GrowChart() {
//   return (
//     <LineChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{
//         top: 5,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip />
//       <Legend />

//       <Line
//         type="monotone"
//         dataKey="До X-Boost"
//         stroke="#8884d8"
//         activeDot={{ r: 8 }}
//       />
//       <Line type="monotone" dataKey="После X-Boost" stroke="#82ca9d" />
//     </LineChart>
//   );
// }
