import { useState } from 'react'
import './App.css'
import Display from "./components/Display"
import Inputs from "./components/Inputs"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Inputs />
        <Display />
      </main>
    </>
  )
}

export default App
