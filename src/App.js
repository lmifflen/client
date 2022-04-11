import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    getTimeFromServer();
  }, [count]);

  const getTimeFromServer = async () => {
    console.log("clicked");
    try {
      let response = await fetch("/slow");
      let vals = await response.json();
      return setData(vals.currentTime);
    } catch (ex) {
      console.log(ex);
    }
  };
console.log('about to render');
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={getTimeFromServer}>Click Me</button> */}
        <button onClick={() => setCount((curVal) => curVal + 1)}>
          Click Me
        </button>
        <button onClick={() => setCount2((curVal) => curVal + 1)}>
          Click Me2
        </button>
        <p>{data || "no value yet"}</p>
      </header>
    </div>
  );
}

export default App;
