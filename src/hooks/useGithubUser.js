import { useState } from "react";

function useGithubUser() {
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [repos, setRepos] = useState([]);

    function checkError(response, name) {
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`User not found: ${name}`);
            } else if (response.status === 403 || response.status === 429) {
                throw new Error("Rate limit exceeded. Please try again later.");
            } else {
                throw new Error(`Unexpected error: ${response.status}`);
            }
        }
    }
    async function fetchUsername(trimmed) {
        setIsLoading(true);
        setError(null);
        setProfile(null);
        setRepos([]);
        try {
            const [responseProfile, responseRepos] = await Promise.all([
                fetch(`https://api.github.com/users/${trimmed}`),
                fetch(`https://api.github.com/users/${trimmed}/repos?per_page=100`),
            ]);
            checkError(responseProfile, trimmed);
            checkError(responseRepos, trimmed);
            const [profileData, reposData] = await Promise.all([
                responseProfile.json(),
                responseRepos.json(),
            ]);
            setProfile(profileData);
            setRepos(reposData);
        } catch (error) {
            if (error.name === "TypeError") {
                setError(new Error("Network error. Please check your connection."));
            } else setError(error);
        } finally {
            setIsLoading(false);
        }
    }
    const topRepos = repos
        .toSorted((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);
    return { profile, isLoading, error, repos, fetchUsername, topRepos };
}

export default useGithubUser;