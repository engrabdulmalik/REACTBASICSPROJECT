import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    // Add the code for the resetInput function
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    // Add the code for the resetResult function
    setResult((result) => (result = 0));
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>Result : {result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <br />
        <br />
        <button onClick={plus}>Add</button>&nbsp;
        <button onClick={minus}>Subtract</button>&nbsp;
        <button onClick={times}>Multiply</button>&nbsp;
        <button onClick={divide}>Divide</button>&nbsp;
        <button className="button" onClick={resetInput}>
          Reset Input
        </button>
        &nbsp;
        <button className="button" onClick={resetResult}>
          Reset Result
        </button>
      </form>
    </div>
  );
}

export default App;
