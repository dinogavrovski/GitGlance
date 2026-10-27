import { useState } from "react";
import Profile from "./Profile";

function Search() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = username.trim();
    if (trimmed === "") {
      return;
    }
    setIsLoading(true);
    setError(null);
    setProfile(null);
    try {
      const response = await fetch(`https://api.github.com/users/${trimmed}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`User not found: ${trimmed}`);
        } else if (response.status === 429 || response.status === 403) {
          throw new Error("Rate limit exceeded. Please try again later.");
        } else throw new Error(`Unexpected error: ${response.status}`);
      }
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      if (error.name === "TypeError") {
        setError(new Error("Network error. Please check your connection."));
      } else setError(error);
    } finally {
      setIsLoading(false);
    }
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

      {isLoading && <p>Loading...</p>}
      {profile && <Profile user={profile} />}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}

export default Search;
