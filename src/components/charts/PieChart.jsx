import { Pie, PieChart, Tooltip } from "recharts";
import { getLanguageCounts } from "../../utils/repoStats";

function StraightAnglePieChart({ repos, isAnimationActive = true }) {
  const data = getLanguageCounts(repos);
  const chartData = Object.entries(data).map(([language, count]) => ({
    language,
    count,
  }));
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: 2,
      }}
      responsive
    >
      <Pie
        dataKey="count"
        startAngle={180}
        endAngle={0}
        data={chartData}
        cx="50%"
        cy="100%"
        outerRadius="120%"
        label={({ language }) => language}
        nameKey="language"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip />
    </PieChart>
  );
}
export default StraightAnglePieChart;
