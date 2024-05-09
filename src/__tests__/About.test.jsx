import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About Component", () => {
  test("renders without crashing", () => {
    render(<About />);
  });

  test("test paragraph", () => {
    render(<About />);
    const icons = document.querySelectorAll("p");
    for (let i = 0; i < icons.length; i++) {
      expect(icons[i]).toBeInTheDocument();
    }
  });

  test("testing headings", () => {
    render(<About />);
    const headings = screen.getAllByRole("heading");
    for (let i = 0; i < headings.length; i++) {
      expect(headings[i]).toBeInTheDocument();
    }
  });
});
