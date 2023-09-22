/* eslint-disable react/prop-types */
import { useState } from 'react'

function Inputs({ percent, setPercent }) {
  const [percentInput, setPercentInput] = useState("")

  const inputChange = (value) => {
    setPercentInput(value)
    setPercent(value)
  }

  const buttonClicked = (value) => {
    setPercentInput("")
    setPercent(value)
  }

  return (
    <div className="container">
      <div className="input-container">
        <label>Bill</label>
        <input />
      </div>
      <div className="input-container">
        <label>Select Tip %</label>
        <div className="button-group">
          <button className={percent == 5 ? "button-active" : ""} onClick={() => buttonClicked(5)}>5%</button>
          <button className={percent == 10 ? "button-active" : ""} onClick={() => buttonClicked(10)}>10%</button>
          <button className={percent == 15 ? "button-active" : ""} onClick={() => buttonClicked(15)}>15%</button>
          <button className={percent == 25 ? "button-active" : ""} onClick={() => buttonClicked(25)}>25%</button>
          <button className={percent == 50 ? "button-active" : ""} onClick={() => buttonClicked(50)}>50%</button>
          <input placeholder="Custom" onChange={(e) => inputChange(e.value)} value={percentInput}/>
        </div>
      </div>
      <div className="input-container">
        <label>Number of People</label>
        <input />
      </div>
    </div>
  );
}

export default Inputs;
