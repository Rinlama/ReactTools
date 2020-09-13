import React, { useContext, useEffect } from "react";
import NumberContext from "../Context/NumberContext";

function Button() {
  const { numberState, setNumberState } = useContext(NumberContext);

  return (
    <div>
      <h4>{numberState}</h4>
      <button
        onClick={() => {
          setNumberState(numberState + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setNumberState(numberState - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Button;
