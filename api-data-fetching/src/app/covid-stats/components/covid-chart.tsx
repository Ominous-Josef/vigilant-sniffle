"use client";

import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { CustomChartTooltip } from "./chart-tooltip";

interface CovidChartProps {
  data: {
    name: string;
    date: string;
    positive: number;
    death: number;
    hospitalizedCurrently: number;
    totalTestResults: number;
    newDeaths: number;
    newPositive: number;
    newHospitalized: number;
    newTests: number;
  }[];
  isLoading: boolean;
}

export const CovidChart = ({ data, isLoading }: CovidChartProps) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={60}
            stroke="#6b7280" // Tailwind gray-500
            tickFormatter={(value, index) => (index % 10 === 0 ? value : "")}
            interval={0}
          />

          {/* Y-Axis: New Cases */}
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#3b82f6" // Tailwind blue-500
            tickFormatter={(value) => value.toLocaleString()}
            label={{
              value: "New Cases",
              angle: -90,
              position: "insideLeft",
              fill: "#1f2937",
              style: { textAnchor: "middle" },
            }}
          />

          {/* Y-Axis: New Deaths (on the right for dual axis comparison) */}
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#ef4444" // Tailwind red-500
            tickFormatter={(value) => value.toLocaleString()}
            label={{
              value: "New Deaths",
              angle: 90,
              position: "insideRight",
              fill: "#1f2937",
              style: { textAnchor: "middle" },
            }}
          />

          <Tooltip content={<CustomChartTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "20px" }} />

          {/* Line 1: New Positive Cases (Left Axis) */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="newPositive"
            name="New Positive Cases"
            stroke="#3b82f6" // Blue
            dot={false} // Hide individual dots for cleaner look
            strokeWidth={2}
            activeDot={{ r: 5 }}
          />

          {/* Line 2: New Deaths (Right Axis) */}
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="newDeaths"
            name="New Deaths"
            stroke="#ef4444" // Red
			legendType="square"
            dot={false}
			spacing={"30px"}
            strokeWidth={2}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
