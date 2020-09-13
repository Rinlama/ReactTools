import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import ThemeContext from "./Context/ThemeContext";

const ThemeData = {
  light: {
    background: "white",
    color: "black",
  },
  dark: {
    background: "black",
    color: "white",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "light":
      return ThemeData.light;
    case "dark":
      return ThemeData.dark;
    default:
      throw new Error();
  }
};

function init() {
  return ThemeData.light;
}

function App() {
  const [state, dispatch] = useReducer(reducer, {}, init);

  return (
    <div className="App" style={state}>
      <div style={{ border: "1px solid #ccc", height: "100vh" }}>
        <ThemeContext.Provider value={{ dispatch }}>
          <Home />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
