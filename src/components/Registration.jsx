import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

function Registration() {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    tnc: false,
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // onchange handler-
  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormValue({ ...formValue, [name]: inputValue });
  };
  // onsubmit handler-
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
      localStorage.setItem("formValue", JSON.stringify(formValue));
    }
  }, [formError, isSubmit, formValue]);

  // validate form values
  const validate = (value) => {
    const error = {};
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // username validation
    if (value.username.trim().length === 0) {
      error.username = "username cant be empty*";
    }

    // email validation
    if (!value.email) {
      error.email = "email cant be empty*";
    } else if (!emailRegex.test(value.email)) {
      error.email = "email is not valid*";
    }

    // password validation
    if (!value.password) {
      error.password = "Password can't be empty*";
    } else if (!passwordRegex.test(value.password)) {
      error.password =
        "Password must have at least 8 characters, containing at least one letter, one number, and one special character";
    }

    // confirmPassword validation
    if (!value.confirmPassword) {
      error.confirmPassword = "Confirm Password can't be empty*";
    } else if (!passwordRegex.test(value.confirmPassword)) {
      error.confirmPassword =
        "Confirm Password must have at least 8 characters, containing at least one letter, one number, and one special character";
    } else if (value.password !== value.confirmPassword) {
      error.confirmPassword = "pasword is not matching*";
    }

    // tnc validation
    if (!value.tnc) {
      error.tnc = "Please agree to terms and conditions";
    }

    return error;
  };

  return (
    <div className="container d-flex justify-content-center">
      {Object.keys(formError).length === 0 && isSubmit ? (
        <Login />
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ width: "450px" }}
        >
          <form
            className="p-1 p-md-5 border rounded-2 bg-body-tertiary  "
            onSubmit={handleSubmit}
          >
            <h3 className="text-center">
              <u>Registration-Form</u>
            </h3>
            <div className="form-floating mb-2">
              <input
                type="text"
                name="username"
                value={formValue.username}
                className="form-control"
                id="userInput"
                placeholder="name@example.com"
                onChange={handleInput}
              />
              <label htmlFor="userInput">Username</label>
              <p style={{ color: "red" }}>{formError.username}</p>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="email"
                value={formValue.email}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={handleInput}
              />
              <label htmlFor="floatingInput">Email address</label>
              <p style={{ color: "red" }}>{formError.email}</p>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                value={formValue.password}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={handleInput}
              />
              <label htmlFor="floatingPassword">Password</label>
              <p style={{ color: "red" }}>{formError.password}</p>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="confirmPassword"
                value={formValue.confirmPassword}
                className="form-control"
                id="cPassword"
                placeholder="confirmPassword"
                onChange={handleInput}
              />
              <label htmlFor="cPassword">confirmPassword</label>
              <p style={{ color: "red" }}>{formError.confirmPassword}</p>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input
                  type="checkbox"
                  name="tnc"
                  checked={formValue.tnc}
                  onChange={handleInput}
                />{" "}
                agree
              </label>
              <p style={{ color: "red" }}>{formError.tnc}</p>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary">
              By clicking Sign up, you agree to the terms of use.
              <br />
              <p>
                Already Register ? <Link to="/login">SignIn</Link>
              </p>
            </small>
          </form>
        </div>
      )}
    </div>
  );
}

export default Registration;
