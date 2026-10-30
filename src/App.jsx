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
  const { profile, isLoading, error, repos, topRepos } =
    useGithubUser(username);

  return (
    <>
      <Search isLoading={isLoading} />
      {username && (
        <>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {profile && <Profile user={profile} />}
          {repos.length > 0 && <RepoList repos={topRepos} />}
          {profile && <SimpleBarChart repos={repos} />}
          {profile && <StraightAnglePieChart repos={repos} />}
        </>
      )}
    </>
  );
}

export default App;
