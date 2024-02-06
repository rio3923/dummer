import { useState } from "react";
import "./App.css";

function App() {
  
  // Using useSate()

  let [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    counter++;
    setCounter(counter);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Positive Counter</h2>
      <h2>
        Counter Value : <span> {counter}</span>
      </h2>
      <button onClick={increaseCounter}>Increase</button>
      <br />
      <br />
      <button onClick={decreaseCounter}>Decrease</button>
    </>
  );
}

export default App;
