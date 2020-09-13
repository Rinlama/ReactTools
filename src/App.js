import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import NumberContext from "./Context/NumberContext";

function App() {
  const [numberState, setNumberState] = useState(0);

  return (
    <div>
      <NumberContext.Provider value={{ numberState, setNumberState }}>
        <Home></Home>
      </NumberContext.Provider>
    </div>
  );
}

export default App;
