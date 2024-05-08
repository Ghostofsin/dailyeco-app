"use client";

import styles from "./footprintChart.module.css";

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
  ComposedChart,
  Line,
} from "recharts";


export default function FootprintChart({ data }) {
  return (
    <div className={styles.container}>
      <ResponsiveContainer
        width="110%"
        height={300}
      >
        <ComposedChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "rgba(250, 250, 250, 0.8)" }}
            wrapperStyle={{ backgroundColor: "transporent" }}
          />
          <Legend />
          <Bar
            dataKey="Land Transport"
            stackId="a"
            fill="#FFA357"
          />
          <Bar
            dataKey="Water Transport"
            stackId="a"
            fill="#38A3A5"
          />
          <Bar
            dataKey="Air Transport"
            stackId="a"
            fill="#C1936D"
          />
          <Bar
            dataKey="Electro Transport"
            stackId="a"
            fill="#2D7D90"
          />
          <Line
            type="monotone"
            dataKey="Total"
            stroke="#D7395C"
            strokeWidth={3}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
