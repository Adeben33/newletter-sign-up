import { Link } from "react-router-dom";
import "./success.css";

function Success() {
  return (
    <div className="success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
      >
        <g fill="none">
          <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
          <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8" />
        </g>
      </svg>
      <div className="success-heading"> Thanks for subscribing!</div>
      <div className="text">
        A confirmation email has been sent to email@gmail.com Please open it and
        click the button inside to confirm your subscription.
      </div>
      <Link to="/" className="link">
        Dismiss message
      </Link>
    </div>
  );
}

export default Success;
