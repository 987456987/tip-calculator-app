/* eslint-disable react/prop-types */
function Display({ tipPercent, numPeople, billTotal }) {
  const tipAmount = parseFloat(billTotal) * (tipPercent / 100);
  const total = parseFloat(billTotal) + tipAmount;

  return (
    <div className="display-container">
      <div className="outer-container">
        <div className="inner-container">
          <div className="inner-left-container">
            <h3>Tip Amount</h3>
            <p className="extra">/ person</p>
          </div>
          <div className="output">
            {isFinite(tipAmount/numPeople) ? (tipAmount / numPeople).toFixed(2).toString() : "0.00"}
          </div>
        </div>
        <div className="inner-container">
          <div className="inner-left-container">
            <h3>Total</h3>
            <p className="extra">/ person</p>
          </div>
          <div className="output">
            {isFinite(total/numPeople)  ? (total / numPeople).toFixed(2).toString() : "0.00"}
          </div>
        </div>
      </div>
      <button className="reset-button">RESET</button>
    </div>
  );
}

export default Display;
