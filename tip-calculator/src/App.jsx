import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Inputs from "./components/Inputs";

function App() {
  const [billTotal, setBillTotal] = useState(0);
  const [numPeople, setNumPeople] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);

  return (
    <>
      <main>
        <Inputs
          setTipPercent={setTipPercent}
          tipPercent={tipPercent}
          setNumPeople={setNumPeople}
          setBillTotal={setBillTotal}
        />
        <Display
          tipPercent={tipPercent}
          billTotal={billTotal}
          numPeople={numPeople}
        />
      </main>
    </>
  );
}

export default App;
