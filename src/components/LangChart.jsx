import { getLanguageCounts, getReposByYear } from "../utils/repoStats";

function LangChart({ repos }) {
  const languageCounts = getLanguageCounts(repos);
  const reposByYear = getReposByYear(repos);

  return (
    <div>
      <h2>Language Counts</h2>
      {Object.entries(languageCounts).map(([language, count]) => (
        <p key={language}>
          {language}: {count}
        </p>
      ))}
      <h2>Repos by Year</h2>
      {Object.entries(reposByYear).map(([year, count]) => (
        <p key={year}>
          {year}: {count}
        </p>
      ))}
    </div>
  );
}

export default LangChart;
