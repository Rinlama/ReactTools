import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

function Buttons() {
  const { dispatch } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "light" });
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dark" });
        }}
      >
        Dark
      </button>
    </div>
  );
}

export default Buttons;
