import React, { useState } from 'react'
import Select from './components/Select'
import Input from './components/Input'
import { units } from './units'

function App() {

  const [result, setResult] = useState(0);
  const [handler, setHandler] = useState(0);
  const [op1, setOp1] = useState(1);
  const [op2, setOp2] = useState(1);

  const myB = (e) => {
    e.preventDefault();
    setResult((handler * op1)/op2 || 0);
    if (handler == 0) {
      setResult(0);
    }
  }

  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input type="text" label={"Amount"} onChange={(e) => setHandler(e.target.value) } />
        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label={"From"} items={units} onChange={(e) => setOp1(e.target.value)}  />
          <Select label={"To"} items={units} onChange={(e) => setOp2(e.target.value)} />


          <button onClick={myB}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  )
}

export default App
