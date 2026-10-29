function getLanguageCounts(repos) {
    const languageCounts = repos.reduce((acc, repo) => {
        if (repo.language === null) {
            return acc;
        }
        acc[repo.language] = (acc[repo.language] || 0) + 1;
        return acc;
    }, {});
    return languageCounts;
}

function getReposByYear(repos) {
    const reposByYear = repos.reduce((acc, repo) => {
        const year = new Date(repo.created_at).getFullYear();
        acc[year] = (acc[year] || 0) + 1;
        return acc;
    }, {});
    return reposByYear;
}

export { getLanguageCounts, getReposByYear };
