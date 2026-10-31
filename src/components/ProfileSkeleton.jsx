// Grey placeholder shapes shown while a profile is loading
function ProfileSkeleton() {
  return (
    <div className="dashboard" aria-busy="true" aria-label="Loading profile">
      <div className="card profile">
        <div className="skeleton skeleton-avatar" />
        <div className="profile-info">
          <div className="skeleton skeleton-line skeleton-line--lg" />
          <div className="skeleton skeleton-line skeleton-line--sm" />
          <div className="skeleton skeleton-line" />
        </div>
      </div>
      <div className="dashboard-main">
        <div className="chart-grid">
          <div className="card chart-card">
            <div className="skeleton skeleton-line skeleton-line--md" />
            <div className="chart-body skeleton" />
          </div>
          <div className="card chart-card">
            <div className="skeleton skeleton-line skeleton-line--md" />
            <div className="chart-body skeleton" />
          </div>
        </div>
        <div className="repos">
          <div className="repo-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="card skeleton-card">
                <div className="skeleton skeleton-line skeleton-line--md" />
                <div className="skeleton skeleton-line skeleton-line--sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSkeleton;
