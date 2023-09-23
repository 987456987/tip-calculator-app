/* eslint-disable react/prop-types */
function Display({ tipPercent, numPeople, billTotal }) {
  const tipAmount = (parseFloat(billTotal) * (tipPercent/100))
  const total = parseFloat(billTotal) + tipAmount
  
  return (
    <div className="container">
      <div className="outer-container">
        <div className="inner-container">
          <div className="inner-left-container">
            <h3>Tip Amount</h3>
            <p className="extra">/ person</p>
          </div>
          <div className="output">{(tipAmount/numPeople).toFixed(2).toString()}</div>
        </div>
        <div className="inner-container">
          <h3>Total</h3>
          <p className="extra">/ person</p>
        </div>
          <div className="output">{(total/numPeople).toFixed(2).toString()}</div>
      </div>
      <button>RESET</button>
    </div>
  );
}

export default Display;
