import "./App.css";
import Profile from "./components/Profile";
import ProfileSkeleton from "./components/ProfileSkeleton";
import Search from "./components/Search";
import useGithubUser from "./hooks/useGithubUser";
import RepoList from "./components/RepoList";
import SimpleBarChart from "./components/charts/BarChart";
import StraightAnglePieChart from "./components/charts/PieChart";
import Landing from "./components/Landing";
import { Link, useParams } from "react-router";

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
    <div className="app">
      <header className="header">
        <Link to="/" className="brand">
          <img className="brand-logo" src="/favicon.svg" alt="" />
          GitGlance
        </Link>
        <Search isLoading={isLoading} key={username} />
      </header>

      <main className="main">
        {!username && <Landing />}

        {username && (
          <>
            {isLoading && <ProfileSkeleton />}
            {error && (
              <p className="error" role="alert">
                {error.message}
              </p>
            )}
            {profile && (
              <div className="dashboard">
                <Profile user={profile} />
                <div className="dashboard-main">
                  {repos.length > 0 && (
                    <div className="chart-grid">
                      <StraightAnglePieChart repos={repos} />
                      <SimpleBarChart repos={repos} />
                    </div>
                  )}
                  {repos.length > 0 && <RepoList repos={topRepos} />}
                  {repos.length === 0 && profile && !error && (
                    <p className="empty">No public repositories found.</p>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {username &&
        remainingLimit !== null &&
        (remainingLimit > 0 ? (
          <footer className="footer">
            Remaining API requests this hour: {remainingLimit}
          </footer>
        ) : (
          <footer className="footer footer--warning">
            Limit reached. Resets at{" "}
            {new Date(resetTime * 1000).toLocaleTimeString()}
          </footer>
        ))}
    </div>
  );
}

export default App;
