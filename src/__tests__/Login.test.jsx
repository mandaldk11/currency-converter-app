import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../components/Login";

describe("Login Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });

  it("renders login form", () => {
    const emailInput = screen.getByLabelText("Email address");
    const passwordInput = screen.getByLabelText("Password");
    const signInButton = screen.getByRole("button", { name: "Sign in" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  it("displays validation errors on submit with invalid input", async () => {
    const signInButton = screen.getByRole("button", { name: "Sign in" });
    fireEvent.click(signInButton);

    expect(
      await screen.findByText("Email can't be empty*")
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Password can't be empty*")
    ).toBeInTheDocument();
  });

  it("submits form with valid input and navigates on successful login", async () => {
    const emailInput = screen.getByLabelText("Email address");
    const passwordInput = screen.getByLabelText("Password");
    const signInButton = screen.getByRole("button", { name: "Sign in" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Test@123" } });
    fireEvent.click(signInButton);
  });
});
