import React from "react";
import "../assets/css/NotFoundPage.css"; // Import the CSS file for styling

function PageNotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    </div>
  );
}

export default PageNotFound;
