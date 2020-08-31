import React from "react";

function Loader(props) {
  const { isBusy } = props;
  return (
    <div>
      {isBusy ? (
        <div className="loader">
          <div className="centered">
            <div className="rotater"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Loader;
