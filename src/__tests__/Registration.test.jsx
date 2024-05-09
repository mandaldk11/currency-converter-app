import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Registration from "../components/Registration";
import { MemoryRouter } from "react-router-dom";

describe("Registration Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>
    );
  });

  it("renders registration form", () => {
    const usernameInput = screen.getByLabelText("Username");
    const emailInput = screen.getByLabelText("Email address");
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("confirmPassword");
    const tncCheckbox = screen.getByLabelText("agree");
    const signUpButton = screen.getByRole("button", { name: "Sign up" });

    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(tncCheckbox).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  it("displays validation errors on submit with invalid input", () => {
    const signUpButton = screen.getByRole("button", { name: "Sign up" });
    fireEvent.click(signUpButton);

    expect(screen.getByText("username cant be empty*")).toBeInTheDocument();
    expect(screen.getByText("email cant be empty*")).toBeInTheDocument();
    expect(screen.getByText("Password can't be empty*")).toBeInTheDocument();
    expect(
      screen.getByText("Please agree to terms and conditions")
    ).toBeInTheDocument();
  });

  it("submits form with valid input", () => {
    const usernameInput = screen.getByLabelText("Username");
    const emailInput = screen.getByLabelText("Email address");
    const passwordInput = screen.getByLabelText("Password");

    const tncCheckbox = screen.getByLabelText("agree");
    const signUpButton = screen.getByRole("button", { name: "Sign up" });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Test@123" } });

    fireEvent.click(tncCheckbox);
    fireEvent.click(signUpButton);
  });
});
