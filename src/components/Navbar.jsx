import React from "react";
import logo from "../assets/images/clogo.jpg";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const loggedIn = localStorage.getItem("loggedIn");
  const Navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("loggedIn");
    Navigate("/login");
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom">
      <div className="col-md-2 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <img
            className="bi mx-2"
            width="75"
            height="60"
            role="img"
            aria-label="Bootstrap"
            src={logo}
            alt="Logo"
          />
          <h4 style={{ color: "blue" }}>Currency Converter </h4>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/" className="nav-link px-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="/features" className="nav-link px-2">
            Features
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="nav-link px-2">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/faq" className="nav-link px-2">
            FAQs
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link px-2">
            About
          </Link>
        </li>
      </ul>

      <div className="col-md-2 text-end">
        {loggedIn ? (
          <button
            type="button"
            className="btn btn-outline-primary mx-4"
            onClick={handleLogOut}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
