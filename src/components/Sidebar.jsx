import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";

function Sidebar() {
  const loggedUser = JSON.parse(localStorage.getItem("formValue"));
  const loggedIn = localStorage.getItem("loggedIn");
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "100%", maxWidth: "280vw", height: "100vh" }} // Adjusted width for larger screens
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        ></a>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white" aria-current="page">
              <IoHomeOutline className="me-2" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" className="nav-link text-white">
              <GrServices className="me-2" />
              Services
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{loggedIn && loggedUser.username.slice(0, 8)}</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <Link className="dropdown-item" to="/github" target="_blank">
                Github Repo
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/features">
                Services
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/about">
                About
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
