import { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = username.trim();
    if (trimmed === "") {
      return;
    }
    setUser(trimmed);
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
      <button type="submit">Search</button>
      <p>Username: {user}</p>
    </form>
  );
}

export default Search;
