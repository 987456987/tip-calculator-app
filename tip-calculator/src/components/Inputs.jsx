function Inputs() {
  return (
    <>
      <div className="input-container">
        <label>Bill</label>
        <input />
      </div>
      <div className="input-container">
        <label>Select Tip %</label>
        <div className="button-group">
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <input placeholder="Custom" />
        </div>
      </div>
      <div className="input-container">
        <label>Number of People</label>
        <input />
      </div>
    </>
  );
}

export default Inputs;
