import { useState } from "react";
import { useNavigate, useParams } from "react-router";

function Search({ isLoading }) {
  const { username: placeholderUsername } = useParams();
  const [username, setUsername] = useState(placeholderUsername || "");
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = username.trim();
    if (trimmed === "") {
      return;
    }
    navigate(`/u/${trimmed}`);
  }

  return (
    <form className="search" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username" className="visually-hidden">
        GitHub username
      </label>
      <input
        className="search-input"
        type="text"
        id="username"
        placeholder="Enter a GitHub username"
        autoComplete="off"
        spellCheck={false}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="search-button" type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  );
}

export default Search;
