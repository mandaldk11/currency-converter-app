import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div>
      <div class="container py-3">
        <main>
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Free</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $0<small class="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <Link to="/register">
                    <button
                      type="button"
                      class="w-100 btn btn-lg btn-outline-primary"
                    >
                      Sign up for free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Pro</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $15<small class="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-primary">
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-bg-primary border-primary">
                  <h4 class="my-0 fw-normal">Enterprise</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $29<small class="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-primary">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="pt-4 my-md-5 pt-md-5 border-top">
          <div class="row">
            <div class="col-12 col-md">
              <img
                class="mb-2"
                src="/docs/5.3/assets/brand/bootstrap-logo.svg"
                alt=""
                width="24"
                height="19"
              />
              <small class="d-block mb-3 text-body-secondary">
                © 2017–2024
              </small>
            </div>
            <div class="col-6 col-md">
              <h5>Features</h5>
              <ul class="list-unstyled text-small">
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Cool stuff
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Random feature
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Team feature
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Another one
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Resource
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Resource name
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Another resource
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>About</h5>
              <ul class="list-unstyled text-small">
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Team
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Locations
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Privacy
                  </a>
                </li>
                <li class="mb-1">
                  <a class="link-secondary text-decoration-none" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Pricing;
