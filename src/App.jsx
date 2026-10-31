import "./App.css";
import Profile from "./components/Profile";
import Search from "./components/Search";
import useGithubUser from "./hooks/useGithubUser";
import RepoList from "./components/RepoList";
import SimpleBarChart from "./components/charts/BarChart";
import StraightAnglePieChart from "./components/charts/PieChart";
import { useParams } from "react-router";

function App() {
  const { username } = useParams();
  const {
    profile,
    isLoading,
    error,
    repos,
    topRepos,
    remainingLimit,
    resetTime,
  } = useGithubUser(username);

  return (
    <>
      <Search isLoading={isLoading} key={username} />
      {username && (
        <>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {profile && <Profile user={profile} />}
          {repos.length > 0 && <RepoList repos={topRepos} />}
          {repos.length > 0 && <SimpleBarChart repos={repos} />}
          {repos.length > 0 && <StraightAnglePieChart repos={repos} />}
          {repos.length === 0 && profile && (
            <p>No public repositories found.</p>
          )}
          {remainingLimit !== null &&
            (remainingLimit > 0 ? (
              <p>Remaining API requests: {remainingLimit}</p>
            ) : (
              <p>
                Limit reached. Resets at:{" "}
                {new Date(resetTime * 1000).toLocaleTimeString()}
              </p>
            ))}
        </>
      )}
    </>
  );
}

export default App;
