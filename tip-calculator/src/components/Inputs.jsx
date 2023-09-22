/* eslint-disable react/prop-types */

function Inputs({ percent, setPercent }) {

  return (
    <div className="container">
      <div className="input-container">
        <label>Bill</label>
        <input />
      </div>
      <div className="input-container">
        <label>Select Tip %</label>
        <div className="button-group">
          <button className={percent == 5 && "button-active"} onClick={() => setPercent(5)}>5%</button>
          <button className={percent == 10 && "button-active"} onClick={() => setPercent(10)}>10%</button>
          <button className={percent == 15 && "button-active"} onClick={() => setPercent(15)}>15%</button>
          <button className={percent == 25 && "button-active"} onClick={() => setPercent(25)}>25%</button>
          <button className={percent == 50 && "button-active"} onClick={() => setPercent(50)}>50%</button>
          <input placeholder="Custom" onChange={(e) => setPercent(e.value)}/>
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
