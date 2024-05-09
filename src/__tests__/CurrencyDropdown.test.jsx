import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CurrencyDropdown from "./CurrencyDropdown";
import "@testing-library/jest-dom"; // This is optional but provides helpful matchers

describe("CurrencyDropdown Component", () => {
  const currencies = ["USD", "EUR", "GBP"];
  const setCurrencyMock = jest.fn();

  beforeEach(() => {
    render(
      <CurrencyDropdown
        currencies={currencies}
        currency="USD"
        setCurrency={setCurrencyMock}
        title="Select Currency"
      />
    );
  });

  test("renders without crashing", () => {
    const label = screen.getByText(/Select Currency/i);
    expect(label).toBeInTheDocument();
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
  });

  test("renders correct number of options", () => {
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(currencies.length);
  });

  test("renders options with correct values", () => {
    const options = screen.getAllByRole("option");
    currencies.forEach((currency, idx) => {
      expect(options[idx]).toHaveTextContent(currency);
      expect(options[idx]).toHaveAttribute("value", currency);
    });
  });

  test("calls setCurrency when an option is selected", () => {
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "EUR" } });
    expect(setCurrencyMock).toHaveBeenCalledWith("EUR");
  });
});
