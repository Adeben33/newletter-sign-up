import { useState } from "react";
import "./Home.css";
import isEmail from "validator/lib/isEmail";

function Home() {
  const [emailError, setEmailError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    return isEmail(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validateEmail(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  return (
    <main>
      <div className="container">
        <div className="heading">Stay updated!</div>
        <p>
          Join 60,000+ product managers receiving monthly <br /> updates on:
        </p>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <p>Product discovery and building what matters </p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <p>And much more!</p>
          </li>
        </ul>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="label">
            Email address
            {emailError ? (
              <span className="error"> Invalid email address</span>
            ) : (
              ""
            )}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
            className={emailError && submitted ? "error-box" : ""}
            required
          />
          <input
            type="submit"
            value="Subscribe to monthly newsletter"
            onClick={handleSubmit}
          />
        </form>
      </div>
      <div className="image"></div>
    </main>
  );
}

export default Home;
