import { useState, useEffect } from "react";

function useGithubUser(username) {
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [repos, setRepos] = useState([]);
    const [remainingLimit, setRemainingLimit] = useState(null);
    const [resetTime, setResetTime] = useState(null);

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
    useEffect(() => {
        if (!username) return;
        let ignore = false;
        async function fetchUsername(trimmed) {
            setError(null);
            const cacheKey = `github:${trimmed.toLowerCase()}`;
            const raw = sessionStorage.getItem(cacheKey);
            if (raw !== null) {
                const saved = JSON.parse(raw);
                if (Date.now() - saved.savedAt < 5 * 60 * 1000) {
                    setProfile(saved.profile);
                    setRepos(saved.repos);
                    setIsLoading(false);
                    return;
                }
                sessionStorage.removeItem(cacheKey);
            }
            setIsLoading(true);
            setProfile(null);
            setRepos([]);
            try {
                const [responseProfile, responseRepos] = await Promise.all([
                    fetch(`https://api.github.com/users/${trimmed}`),
                    fetch(`https://api.github.com/users/${trimmed}/repos?per_page=100`),

                ]);
                const remainingLimitParsed = Number.parseInt(responseProfile.headers.get("X-RateLimit-Remaining"));
                const resetTimeParsed = Number.parseInt(responseProfile.headers.get("X-RateLimit-Reset"))
                if (!ignore) {
                    setRemainingLimit(remainingLimitParsed);
                    setResetTime(resetTimeParsed);
                }
                checkError(responseProfile, trimmed);

                const [profileData, reposData] = await Promise.all([
                    responseProfile.json(),
                    responseRepos.json(),
                ]);
                if (!ignore) {
                    if (!responseRepos.ok) {
                        setError(new Error("Failed to fetch repositories. Please try again later."));
                        setRepos([]);
                    } else {
                        setRepos(reposData);
                        sessionStorage.setItem(
                            cacheKey,
                            JSON.stringify({ profile: profileData, repos: reposData, savedAt: Date.now() })
                        );
                    }
                    setProfile(profileData);
                }
            } catch (error) {
                if (!ignore) {
                    if (error.name === "TypeError") {
                        setError(new Error("Network error. Please check your connection."));
                    } else setError(error);
                }
            } finally {
                if (!ignore) {
                    setIsLoading(false);
                }
            }
        }
        fetchUsername(username);
        return () => {
            ignore = true;
        }
    }, [username]);
    const topRepos = repos
        .toSorted((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6);
    return { profile, isLoading, error, repos, topRepos, remainingLimit, resetTime };
}

export default useGithubUser;