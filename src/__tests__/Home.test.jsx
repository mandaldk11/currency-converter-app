import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { MemoryRouter } from "react-router-dom";

describe("Home Component", () => {
  test("renders without crashing", () => {
    render(<Home />, { wrapper: MemoryRouter });
  });

  test("displays username if logged in", () => {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("formValue", JSON.stringify({ username: "John" }));
    render(<Home />, { wrapper: MemoryRouter });
    const usernameElement = screen.getByText(/Hello Mr\/Mrs-/i);
    expect(usernameElement).toBeInTheDocument();
    expect(usernameElement).toHaveTextContent("John");
  });

  test("renders link to features page", () => {
    render(<Home />, { wrapper: MemoryRouter });
    const link = screen.getByRole("link", {
      name: /Quick Start with Currency-Converter/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/features");
  });
});
