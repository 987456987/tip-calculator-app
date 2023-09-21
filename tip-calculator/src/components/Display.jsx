function Display() {
  return (
    <div className="container">
      <div className="outer-container">
        <div className="inner-container">
          <div className="inner-left-container">
            <h3>Tip Amount</h3>
            <p className="extra">/ person</p>
          </div>
          <h2 className="output"></h2>
        </div>
        <div className="inner-container">
          <h3>Total</h3>
          <p className="extra">/ person</p>
        </div>
          <h2 className="output"></h2>
      </div>
      <button>RESET</button>
    </div>
  );
}

export default Display;
