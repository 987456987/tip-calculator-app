/* eslint-disable react/prop-types */
import { useState } from 'react'

function Inputs({ tipPercent, setTipPercent, setNumPeople, setBillTotal }) {
  const [percentInput, setPercentInput] = useState("")

  const inputChange = (value) => {
    setPercentInput(value)
    setTipPercent(value)
  }

  const buttonClicked = (value) => {
    setPercentInput("")
    setTipPercent(value)
  }

  return (
    <div className="container">
      <div className="input-container">
        <label>Bill</label>
        {/* handle num errors */}
        <input onChange={(e) => setBillTotal(e.value)}/>
      </div>
      <div className="input-container">
        <label>Select Tip %</label>
        <div className="button-group">
          <button className={tipPercent == 5 ? "button-active" : ""} onClick={() => buttonClicked(5)}>5%</button>
          <button className={tipPercent == 10 ? "button-active" : ""} onClick={() => buttonClicked(10)}>10%</button>
          <button className={tipPercent == 15 ? "button-active" : ""} onClick={() => buttonClicked(15)}>15%</button>
          <button className={tipPercent == 25 ? "button-active" : ""} onClick={() => buttonClicked(25)}>25%</button>
          <button className={tipPercent == 50 ? "button-active" : ""} onClick={() => buttonClicked(50)}>50%</button>
          <input placeholder="Custom" onChange={(e) => inputChange(e.value)} value={percentInput}/>
        </div>
      </div>
      <div className="input-container">
        <label>Number of People</label>
        {/* handle num errors */}
        <input onChange={(e) => setNumPeople(e.value)}/>
      </div>
    </div>
  );
}

export default Inputs;
