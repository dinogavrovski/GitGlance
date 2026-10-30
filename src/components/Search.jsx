import { useState } from "react";

function Search({ onSearch, isLoading }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = username.trim();
    if (trimmed === "") {
      return;
    }
    onSearch(trimmed);
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
