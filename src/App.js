import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1 + parseInt(action.payload);

    case "decrement":
      return state - 1 + parseInt(action.payload);

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <h3>{state}</h3>
      <Button dispatch={dispatch} />
    </div>
  );
}

export default App;
