import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts";
import { getLanguageCounts } from "../../utils/repoStats";
import { getLanguageColor, tooltipStyle } from "./chartTheme";

function StraightAnglePieChart({ repos, isAnimationActive = true }) {
  const data = getLanguageCounts(repos);
  const chartData = Object.entries(data)
    .map(([language, count]) => ({
      language,
      count,
    }))
    .toSorted((a, b) => b.count - a.count);

  return (
    <section className="card chart-card">
      <h3 className="chart-title">Languages</h3>
      {chartData.length === 0 ? (
        <p className="chart-empty">No language data for these repos.</p>
      ) : (
        <div className="chart-body">
          <PieChart style={{ width: "100%", height: "100%" }} responsive>
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="language"
              innerRadius="55%"
              outerRadius="85%"
              paddingAngle={2}
              stroke="none"
              isAnimationActive={isAnimationActive}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={entry.language}
                  fill={getLanguageColor(entry.language, index)}
                />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
            {/* itemSorter={null} keeps the biggest-first order instead of alphabetical */}
            <Legend
              itemSorter={null}
              iconType="circle"
              iconSize={8}
              layout="vertical"
              align="right"
              verticalAlign="middle"
            />
          </PieChart>
        </div>
      )}
    </section>
  );
}
export default StraightAnglePieChart;
