import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState();

  const myClick = async () => {
    try {
      let response = await fetch("/slow");
      let vals = await response.json();
      return setData(vals.currentTime);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={myClick}>Click Me</button>
        <p>{data || "no value yet"}</p>
      </header>
    </div>
  );
}

export default App;
