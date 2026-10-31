import { getLanguageColor } from "./charts/chartTheme";

function RepoList({ repos }) {
  return (
    <section className="repos">
      <h2 className="section-title">Top repositories</h2>
      <ul className="repo-grid">
        {repos.map((repo) => (
          <li key={repo.id} className="card repo-card">
            <div className="repo-head">
              <a
                className="repo-name"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </a>
              <span className="repo-stars">
                ★ {repo.stargazers_count.toLocaleString()}
              </span>
            </div>
            <p className="repo-desc">{repo.description ?? "No description"}</p>
            <span
              className="repo-lang"
              style={{ "--lang-color": repo.language && getLanguageColor(repo.language) }}
            >
              {repo.language ?? "Not specified"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RepoList;
