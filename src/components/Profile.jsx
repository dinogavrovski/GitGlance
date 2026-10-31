function Profile({ user }) {
  return (
    <section className="card profile">
      <img
        className="profile-avatar"
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
      />
      <div className="profile-info">
        <h2 className="profile-name">{user.name ?? user.login}</h2>
        <a
          className="profile-login"
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{user.login}
        </a>
        <p className="profile-bio">{user.bio ? user.bio : "No bio set"}</p>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">
              {user.followers.toLocaleString()}
            </span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {user.public_repos.toLocaleString()}
            </span>
            <span className="stat-label">Public repos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
