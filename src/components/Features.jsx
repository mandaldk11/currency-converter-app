import React, { useEffect, useState } from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { FcCurrencyExchange } from "react-icons/fc";

function Features() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch currencies
  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.log("error while fetching data...", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    console.log(currencies); // Log currencies when it's updated
  }, [currencies]);

  // Convert currency
  const convertCurrency = async () => {
    if (!amount) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      console.log("error while fetching data...", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div
        className="card p-4"
        style={{ width: "37vw", backgroundColor: "b042ff" }}
      >
        <h2
          className="fw-bold mb-0 text-center container"
          style={{ color: "blue" }}
        >
          <u> Currency-Converter</u>
        </h2>
        <br />
        <h1 className="text-center">
          <FcCurrencyExchange size={60} />
        </h1>

        <ul className="d-grid gap-3 my-5 list-unstyled small">
          <li className="d-flex gap-6">
            <div>
              <h6 className="mb-0 d-flex justify-content-between">
                <CurrencyDropdown
                  currencies={currencies}
                  title="From:"
                  currency={fromCurrency}
                  setCurrency={setFromCurrency}
                />
                {/* //swap */}
                <div>
                  <button
                    className="my-4"
                    style={{ borderRadius: "50%", border: "none" }}
                    onClick={handleSwap}
                  >
                    <HiArrowsRightLeft size={20} />
                  </button>
                </div>
                <CurrencyDropdown
                  currencies={currencies}
                  title="To:"
                  currency={toCurrency}
                  setCurrency={setToCurrency}
                />
              </h6>
            </div>
          </li>
          <li className="d-flex gap-4">
            <div>
              <h5 className="mb-1">
                Amount:
                <input
                  type="number"
                  className="form-control mb-2 my-2"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </h5>
            </div>
          </li>
          <li className="d-flex gap-4">
            <div
              className="d-flex justify-content-end"
              style={{ width: "33vw" }}
            >
              <button className="btn btn-success" onClick={convertCurrency}>
                {loading ? "loading" : "convert"}
              </button>
            </div>
          </li>
          <li className="d-flex gap-4">
            <div>
              {convertedAmount && (
                <h5 className="mb-1" style={{ color: "green" }}>
                  Converted Amount: {convertedAmount}
                </h5>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
