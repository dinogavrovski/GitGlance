import "./App.css";
import Profile from "./components/Profile";
import Search from "./components/Search";
import useGithubUser from "./hooks/useGithubUser";
import RepoList from "./components/RepoList";
import SimpleBarChart from "./components/charts/BarChart";
import StraightAnglePieChart from "./components/charts/PieChart";

function App() {
  const { profile, isLoading, error, repos, fetchUsername, topRepos } =
    useGithubUser();
  return (
    <>
      <Search onSearch={fetchUsername} isLoading={isLoading} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {profile && <Profile user={profile} />}
      {repos.length > 0 && <RepoList repos={topRepos} />}
      {profile && <SimpleBarChart repos={repos} />}
      {profile && <StraightAnglePieChart repos={repos} />}
    </>
  );
}

export default App;
