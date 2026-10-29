import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getReposByYear } from "../../utils/repoStats";

function SimpleBarChart({ repos }) {
  const data = getReposByYear(repos);
  const chartData = Object.entries(data).map(([year, count]) => ({
    year,
    count,
  }));
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={chartData}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="year" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" radius={[10, 10, 0, 0]} fill="orange" />
    </BarChart>
  );
}

export default SimpleBarChart;
