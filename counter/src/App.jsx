import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);
  //let counter = 5;
  const addValue = () => {
    //console.log("Clicked!", counter);
    // counter = counter + 1;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  const addStyle = {
    padding: "10px",
    borderRadius: "11px",
    backgroundColor: "green",
    color: "white",
    margin: "10px",
    outline: "none",
    border: "none",
  };
  const removeStyle = {
    padding: "10px",
    borderRadius: "11px",
    backgroundColor: "red",
    color: "white",
    outline: "none",
    border: "none",
  };

  return (
    <>
      <h1>Hello Counter!🚀</h1>
      <h2>Counter Value : {counter}</h2>
      <button style={addStyle} onClick={addValue}>
        Add Value {counter}
      </button>
      <button style={removeStyle} onClick={removeValue}>
        Remove Value {counter}
      </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
