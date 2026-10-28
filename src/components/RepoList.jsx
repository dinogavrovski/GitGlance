function RepoList({ repos }) {
  return (
    <div>
      <h2>Top Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name} - ⭐ {repo.stargazers_count}
            </a>
            <p>{repo.description ?? "No description"}</p>
            <p>{repo.language ?? "Not specified"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;
