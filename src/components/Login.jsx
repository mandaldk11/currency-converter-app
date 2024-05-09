import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();

  const initialValue = {
    email: "",
    password: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  //   const [isSubmit, setIsSubmit] = useState(false);
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

    const loggedUser = JSON.parse(localStorage.getItem("formValue"));

    if (
      formValue.email === loggedUser.email &&
      formValue.password === loggedUser.password
    ) {
      localStorage.setItem("loggedIn", true);
      Navigate("/");
    } else {
      alert("wrong credentials...");
    }
  };

  // validate form values
  const validate = (value) => {
    const error = {};
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // email validation
    if (!value.email) {
      error.email = "Email can't be empty*";
    } else if (!emailRegex.test(value.email)) {
      error.email = "Email is not valid*";
    }

    // password validation
    if (!value.password) {
      error.password = "Password can't be empty*";
    } else if (!passwordRegex.test(value.password)) {
      error.password =
        "Password must have at least 8 characters, containing at least one letter, one number, and one special character";
    }

    return error;
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex justify-content-center" style={{ width: "450px" }}>
        <form
          className="p-3 p-md-5 border rounded-2 bg-body-tertiary  "
          onSubmit={handleSubmit}
        >
          <h3 className="text-center">
            <u>Login-Form</u>
          </h3>

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

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>

          <small>
            <p className="text-center">
              <br />
              Register here ? <Link to="/register">SignUp</Link>
            </p>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
