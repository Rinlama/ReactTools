import React from "react";

function Button(props) {
  const { dispatch } = props;
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: "10" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: "10" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Button;
