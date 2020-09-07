import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(ref.current);
      ref.current.style.border = "solid 2px red";
    }, 2000);
  }, []);

  return (
    <div className="App">
      <input type="text" ref={ref}></input>
    </div>
  );
}

export default App;
