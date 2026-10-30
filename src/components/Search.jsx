import { useState } from "react";
import { useNavigate } from "react-router";

function Search({ isLoading }) {
  const [username, setUsername] = useState("");
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  );
}

export default Search;
