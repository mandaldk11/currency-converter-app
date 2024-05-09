import React from "react";
import { Link } from "react-router-dom";
import currency from "../assets/images/currency.jpg";
function Home() {
  const loggedUser = JSON.parse(localStorage.getItem("formValue"));
  const loggedIn = localStorage.getItem("loggedIn");

  return (
    <div className="container">
      <div class="row flex-lg-row-reverse align-items-center g-2 py-2">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={currency}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h4 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Hello Mr/mrs-
            <span style={{ color: "blue" }}>
              {loggedIn && loggedUser.username}
            </span>{" "}
            Welcome to Currency-Converter website
          </h4>
          <p class="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="/features">
              {" "}
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Quick Start with Currency-Converter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
