import { useState } from 'react'
import './App.css'
import Display from "./components/Display"
import Inputs from "./components/Inputs"


function App() {
  const [percent, setPercent] = useState(0)

  return (
    <>
      <main>
        <Inputs setPercent={setPercent} percent={percent} />
        <Display />
      </main>
    </>
  )
}

export default App
