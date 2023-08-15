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
  Legend,
} from "recharts";

const data = [
  {
    "До X-Boost": 10000,
    "После X-Boost": null,
  },
  {
    "До X-Boost": 20000,
    "После X-Boost": null,
  },
  {
    "До X-Boost": 30000,
    "После X-Boost": null,
  },
  {
    "До X-Boost": 24000,
    "После X-Boost": null,
  },
  {
    "До X-Boost": 28000,
    "После X-Boost": null,
  },
  {
    "До X-Boost": 35000,
    "После X-Boost": 35000,
  },
  {
    "До X-Boost": null,
    "После X-Boost": 35000,
  },
  {
    "До X-Boost": null,
    "После X-Boost": 30000,
  },
  {
    "До X-Boost": null,
    "После X-Boost": 50000,
  },
  {
    "До X-Boost": null,
    "После X-Boost": 100000,
  },
  {
    "До X-Boost": null,
    "После X-Boost": 200000,
  },
  {
    "До X-Boost": null,
    "После X-Boost": 250000,
  },
];

export function GrowChart() {
  return (
    <section className="bg-gray-100 ">
      <div className="flex flex-col container mx-auto px-4 py-8 ">
        <div className="p-4">
          <h2 className="w-1/2 text-6xl leading-tight uppercase tracking-tight font-medium mb-8 text-gray-900">
            Увеличение продуктового роста в 10 раз за 3 месяца с помощью
            X-Booost
          </h2>
        </div>
        <div className="py-8 px-4 border rounded-xl bg-gray-100 shadow-md">
          <ResponsiveContainer
            width="100%"
            height={400}
            className={"flex mx-auto justify-center"}
          >
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
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="До X-Boost"
                stroke="#8884d8"
                fill="blue"
              />
              <Area
                type="monotone"
                dataKey="После X-Boost"
                stroke="#82ca9d"
                fill="green"
              />
              <Legend verticalAlign="bottom" align="center" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
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
