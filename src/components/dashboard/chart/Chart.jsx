"use client";

import styles from "./chart.module.css";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export default function Chart({data, result}) {

  return (
    <div className={styles.container}>
      <ResponsiveContainer
        width="110%"
        height={300}
      >
        <BarChart
          width={150}
          height={40}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            wrapperStyle={{ backgroundColor: "transporent" }}
          />
          {/* <Legend /> */}
          <Bar
            dataKey="users"
            label={{ fill: "white", fontSize: 20 }}
          >
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={entry.name === `${result}/14` ? "#d7395c" : "#8ab4f8"}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
