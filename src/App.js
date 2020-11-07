import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { GetUserAction } from "./redux/reducers/userAction";

function App(props) {
  const { state, get } = props;
  return (
    <div className="App">
      <button
        onClick={() => {
          get();
        }}
      >
        Get User
      </button>
      {JSON.stringify(state)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get: () => {
      dispatch(GetUserAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
