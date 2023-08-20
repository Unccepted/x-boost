import React, { PureComponent } from "react";
// import { data } from "./data";
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
  { "До X-Boost": 0 },
  { "До X-Boost": 1000 },
  { "До X-Boost": 2000 },
  { "До X-Boost": 3000 },
  { "До X-Boost": 4000 },
  { "До X-Boost": 15000 },
  { "До X-Boost": 26000 },
  { "До X-Boost": 17000 },
  { "До X-Boost": 24000 },
  { "До X-Boost": 30000 },
  { "До X-Boost": 45000 },
  { "До X-Boost": 60000 },
  { "До X-Boost": 105000 },
  { "До X-Boost": 120000 },
  { "До X-Boost": 90000 },
  { "До X-Boost": 75000 },

  // { "До X-Boost": 15000 },
];

export function GrowChart() {
  const formatYAxis = (tickItem) => {
    return `${tickItem}$`;
  };
  return (
    <section className="mx-4 ">
      <ResponsiveContainer width={1280} height={400} className={"mx-auto p-4 "}>
        <AreaChart
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
          <YAxis tickFormatter={formatYAxis} />
          <Tooltip />
          <Area
            type="linear"
            dataKey="До X-Boost"
            stroke="#8884d8"
            fill="blue"
          />
          {/* <Legend verticalAlign="bottom" align="center" /> */}
        </AreaChart>
      </ResponsiveContainer>
    </section>
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
