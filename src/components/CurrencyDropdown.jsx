import React from "react";
import "../assets/css/Dropdown.css";

function CurrencyDropdown({ currencies, currency, setCurrency, title = "" }) {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <div className="currency-dropdown-container">
        <select
          className="p-1 border-grey border-radius-8 dropdown-select"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {/* render favourites */}
          {currencies.map((currency, idx) => {
            return (
              <option key={idx} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default CurrencyDropdown;
