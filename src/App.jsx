import { useState } from "react";
import "./App.css";
import isEmail from "validator/lib/isEmail";

function App() {
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (e) => {
    var email = e.target.value;
    if (isEmail(email)) {
      // Correct usage of isEmail
      setEmailError(false); // If the email is valid, we do not want to show an error
    } else {
      setEmailError(true); // If the email is invalid, set error to true
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
                  stroke-width="2"
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
                  stroke-width="2"
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
                  stroke-width="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <p>And much more!</p>
          </li>
        </ul>
        <form className="form">
          <label htmlFor="email" className="label">
            Email address{" "}
            {emailError ? (
              <span className="error"> Valid email required</span>
            ) : (
              ""
            )}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={validateEmail}
            placeholder="email@company.com"
            className={emailError ? "error-box" : ""}
          />
          <input type="button" value="Subscribe to monthly newletter" />
        </form>
      </div>
      <div className="image"></div>
    </main>
  );
}

export default App;
