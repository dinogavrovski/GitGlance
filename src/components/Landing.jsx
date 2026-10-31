import { Link } from "react-router";

const EXAMPLE_USERS = [
  { login: "torvalds", note: "Linux & Git" },
  { login: "gaearon", note: "React" },
  { login: "yyx990803", note: "Vue.js" },
  { login: "sindresorhus", note: "Open source" },
  { login: "addyosmani", note: "Chrome" },
  { login: "tj", note: "Express" },
];

function Landing() {
  return (
    <section className="landing">
      <div className="hero">
        <span className="hero-badge">Free · No sign-in · Shareable links</span>
        <h1 className="hero-title">
          See any GitHub profile{" "}
          <span className="hero-highlight">at a glance</span>
        </h1>
        <p className="hero-text">
          Enter a username to explore their profile, top repositories,
          languages, and activity over time.
        </p>
      </div>

      <div className="examples">
        <p className="examples-label">Try one of these</p>
        <ul className="example-cloud">
          {EXAMPLE_USERS.map(({ login, note }) => (
            <li key={login}>
              <Link className="example-pill" to={`/u/${login}`}>
                {/* github.com/<name>.png is a plain image, so it doesn't use API requests */}
                <img
                  className="example-avatar"
                  src={`https://github.com/${login}.png?size=80`}
                  alt=""
                  width="40"
                  height="40"
                />
                <span className="example-text">
                  <span className="example-login">{login}</span>
                  <span className="example-note">{note}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Landing;
