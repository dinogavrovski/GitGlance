import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getReposByYear } from "../../utils/repoStats";
import { BAR_COLOR, tooltipStyle } from "./chartTheme";

function SimpleBarChart({ repos }) {
  const data = getReposByYear(repos);
  const chartData = Object.entries(data).map(([year, count]) => ({
    year,
    count,
  }));
  return (
    <section className="card chart-card">
      <h3 className="chart-title">Repos created per year</h3>
      <div className="chart-body">
        <BarChart
          style={{ width: "100%", height: "100%" }}
          responsive
          data={chartData}
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="year" tickLine={false} />
          <YAxis
            width="auto"
            allowDecimals={false}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(110, 118, 129, 0.15)" }}
            contentStyle={tooltipStyle}
            labelStyle={{ color: "var(--text-h)" }}
          />
          <Bar
            dataKey="count"
            name="Repos"
            radius={[4, 4, 0, 0]}
            fill={BAR_COLOR}
          />
        </BarChart>
      </div>
    </section>
  );
}

export default SimpleBarChart;
