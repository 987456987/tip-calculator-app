/* eslint-disable react/prop-types */
import { useState } from "react";

function Inputs({ tipPercent, setTipPercent, setNumPeople, setBillTotal }) {
  const [percentInput, setPercentInput] = useState("");
  const [billTotalInput, setBillTotalInput] = useState("");
  const [numPeopleInput, setNumPeopleInput] = useState("");

  const percentInputChange = (value) => {
    const containsOnlyNumbers = /^\d+$/.test(value);
    if (containsOnlyNumbers || value == "") {
      setPercentInput(value);
      setTipPercent(value);
    }
  };

  const billTotalInputChange = (value) => {
    setBillTotal(value);
    setBillTotalInput(value);
  };
  const numPeopleInputChange = (value) => {
    setNumPeople(value);
    setNumPeopleInput(value);
  };

  const buttonClicked = (value) => {
    setPercentInput("");
    setTipPercent(value);
  };

  return (
    <div className="container">
      <div className="input-container">
        <label>Bill</label>
        {/* handle num errors */}
        <input
          className="big-input"
          type="number"
          value={billTotalInput}
          onChange={(e) => billTotalInputChange(e.target.value)}
          placeholder="0.00"
        />
      </div>
      <div className="input-container">
        <label>Select Tip %</label>
        <div className="button-group">
          <button
            className={tipPercent == 5 ? "button-active" : ""}
            onClick={() => buttonClicked(5)}
          >
            5%
          </button>
          <button
            className={tipPercent == 10 ? "button-active" : ""}
            onClick={() => buttonClicked(10)}
          >
            10%
          </button>
          <button
            className={tipPercent == 15 ? "button-active" : ""}
            onClick={() => buttonClicked(15)}
          >
            15%
          </button>
          <button
            className={tipPercent == 25 ? "button-active" : ""}
            onClick={() => buttonClicked(25)}
          >
            25%
          </button>
          <button
            className={tipPercent == 50 ? "button-active" : ""}
            onClick={() => buttonClicked(50)}
          >
            50%
          </button>
          <input
            className="percent-input"
            placeholder="Custom"
            onChange={(e) => percentInputChange(e.target.value)}
            value={percentInput}
          />
        </div>
      </div>
      <div className="input-container">
        <label>Number of People</label>
        {/* handle num errors */}
        <input
          className="big-input"
          type="number"
          value={numPeopleInput}
          onChange={(e) => numPeopleInputChange(e.target.value)}
          placeholder="0"
        />
      </div>
    </div>
  );
}

export default Inputs;
