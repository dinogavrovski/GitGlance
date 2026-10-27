function Profile({ user }) {
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.login}</p>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <p>Name: {user.name}</p>
      <p>Bio: {user.bio ? user.bio : "No bio set"}</p>
      <p>Followers: {user.followers}</p>
      <p>Public repos: {user.public_repos}</p>
    </div>
  );
}

export default Profile;
