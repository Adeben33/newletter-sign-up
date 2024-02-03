import { useState } from "react";
import "./App.css";

function App() {
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
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@company.com"
          />
        </form>
        <button type="button">Subscribe to monthly newletter</button>
      </div>
      <div className="image"></div>
    </main>
  );
}

export default App;
